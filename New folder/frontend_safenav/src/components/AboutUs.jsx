import React from 'react';

const AboutUs = () => {
  return (
    <div className="px-6 py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About SafeNav</h1>
        <p className="text-gray-700 text-lg mb-8">
          At <span className="font-semibold text-indigo-600">SafeNav</span>, our mission is simple: 
          to help you reach your destination safely—because safety should never be optional.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-700">🚨 Why We Built This</h2>
          <p>
            Navigating through unfamiliar or potentially unsafe areas can be stressful—especially at night or in low-lit zones. 
            We realized that traditional map apps don’t always factor in safety. 
            That’s why we built SafeNav: a navigation tool that prioritizes personal safety using crime data, lighting conditions, and real-time analysis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-700">💡 What Makes SafeNav Different?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Uses real-time crime and emergency data</li>
            <li>AI-powered route safety scoring</li>
            <li>Visual cues (color-coded routes)</li>
            <li>Facial mood detection for added awareness</li>
            <li>SOS alert system for emergencies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-700">👥 Meet the Team</h2>
          <p>
            We’re a group of passionate students/engineers focused on building tech for social good. 
            Each team member contributed across AI, frontend design, and backend safety intelligence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-700">🌍 Our Vision</h2>
          <p>
            We believe in a future where navigation apps don’t just guide you—they protect you. 
            SafeNav is a step towards that future, starting with safer walks home.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
