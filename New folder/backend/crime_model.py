import tensorflow as tf
import pandas as pd
import numpy as np
import os
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import Adam
from datetime import datetime

# Define paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CRIME_DATA_PATH = os.path.join(BASE_DIR, "crime_data.csv")
MODEL_PATH = os.path.join(BASE_DIR, "backend", "crime_model.tflite")
SCALER_PATH = os.path.join(BASE_DIR, "backend", "scaler.pkl")

# Ensure backend directory exists
os.makedirs(os.path.join(BASE_DIR, "backend"), exist_ok=True)

# Load dataset
data = pd.read_csv(CRIME_DATA_PATH)

# Features: NOTE – input order is [Longitude, Latitude, Murder, Rape, Robbery]
features = data[['Longitude', 'Latitude', 'Murder', 'Rape', 'Robbery']]
labels = data['Total Crime']

# Normalize features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Save the scaler
joblib.dump(scaler, SCALER_PATH)

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(features_scaled, labels, test_size=0.2, random_state=42)

# Define ANN model
model = Sequential([
    Dense(128, activation='relu', input_shape=(X_train.shape[1],)),
    Dropout(0.4),
    Dense(64, activation='relu'),
    Dropout(0.3),
    Dense(32, activation='relu'),
    Dense(1, activation='linear')  # Output: crime score
])

model.compile(optimizer=Adam(learning_rate=0.001), loss='mse', metrics=['mae'])

# Early stopping
early_stopping = tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)

# Train model
model.fit(X_train, y_train, epochs=100, batch_size=32, validation_data=(X_test, y_test), callbacks=[early_stopping])

# Convert to TensorFlow Lite
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]  # Optimize for size
tflite_model = converter.convert()

# Save model
with open(MODEL_PATH, "wb") as f:
    f.write(tflite_model)

print("✅ Model trained, converted, and saved successfully!")


# Optional: Helper function to test prediction
def predict_safety_score(interpreter, lat, lon, murder, rape, robbery):
    """
    Predicts the crime severity score using the TFLite model.
    """
    try:
        # Load the scaler
        scaler = joblib.load(SCALER_PATH)

        # Prepare input in correct order
        raw_input = np.array([[lon, lat, murder, rape, robbery]], dtype=np.float32)
        input_data = scaler.transform(raw_input)

        # Allocate tensors
        interpreter.allocate_tensors()

        # Set input tensor
        input_details = interpreter.get_input_details()
        interpreter.set_tensor(input_details[0]['index'], input_data)

        # Run inference
        interpreter.invoke()

        # Get output
        output_details = interpreter.get_output_details()
        prediction = interpreter.get_tensor(output_details[0]['index']).copy()

        return float(prediction[0][0])
    except Exception as e:
        print(f"Error during prediction: {e}")
        return None
