import React from 'react';

const testimonials = [
  {
    name: "Emily Johnson",
    feedback: "SafeRoute provides peace of mind with its reliable navigation features. Highly recommend!",
    rating: 5
  },
  {
    name: "Michael Lee",
    feedback: "The app’s safety alerts are a lifesaver. I feel more secure while traveling.",
    rating: 4
  },
  {
    name: "Sophia Martinez",
    feedback: "Amazing app! The real-time updates keep me informed and safe on every trip.",
    rating: 5
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Hear from our awesome users!</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 px-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-lg p-6 shadow-md w-full md:w-1/3" style={{background: 'linear-gradient(90deg, #ede7f6 0%, #ffe0b2 100%)'}}>
            <div className="text-lg font-semibold">{t.name}</div>
            <div className="text-yellow-500 mb-2">
              {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
            </div>
            <p className="text-gray-600 text-sm">{t.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
