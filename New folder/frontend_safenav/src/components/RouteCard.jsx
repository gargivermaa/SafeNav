import React from "react";

const formatDistance = (meters) => (meters / 1000).toFixed(2) + " km";
const formatDuration = (seconds) => {
  const mins = Math.round(seconds / 60);
  return mins + " min";
};

const RouteCard = ({ route, index, label }) => {
  const getBadgeColor = (score) => {
    if (score > 7.5) return "green";
    if (score > 6) return "orange";
    return "red";
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "10px",
        background: 'linear-gradient(90deg, #ede7f6 0%, #ffe0b2 100%)',
        boxShadow: '0 4px 16px 0 rgba(0,0,0,0.07)'
      }}
    >
      {/* ✅ Updated to show custom label like "Safest Route" */}
      <h4>{label || `Route #${index + 1}`}</h4>

      <p>
        <strong>Safety Score:</strong>{" "}
        <span
          style={{
            color: "#fff",
            backgroundColor: getBadgeColor(route.score),
            padding: "4px 8px",
            borderRadius: "5px",
          }}
        >
          {route.score.toFixed(2)}
        </span>
      </p>
      <p>
        <strong>Distance:</strong> {formatDistance(route.distance)}
      </p>
      <p>
        <strong>Estimated Time:</strong> {formatDuration(route.duration)}
      </p>
    </div>
  );
};

export default RouteCard;
