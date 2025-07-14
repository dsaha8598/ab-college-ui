// src/pages/Facilities.js
import React from "react";

const facilities = [
  {
    title: "Library",
    description:
      "The college library houses thousands of academic and reference books across disciplines. Reading room, journals, and digital access are available for students and faculty.",
    icon: "📚",
  },
  {
    title: "Science Laboratories",
    description:
      "Fully equipped Physics, Chemistry, Zoology, and Computer labs support practical and research-based learning for science students.",
    icon: "🔬",
  },
  {
    title: "Computer Lab",
    description:
      "State-of-the-art computers with internet access are available to support coursework, research, and digital literacy.",
    icon: "💻",
  },
  {
    title: "Hostel",
    description:
      "Separate hostels for boys and girls provide safe, hygienic, and affordable accommodation. Hostel capacity exceeds 100 students.",
    icon: "🏠",
  },
  {
    title: "Sports & Playground",
    description:
      "Large playground with support for football, cricket, volleyball, and track events. Indoor facilities for badminton and table tennis are also available.",
    icon: "🏏",
  },
  {
    title: "Auditorium & Cultural Hall",
    description:
      "Spacious halls are used for seminars, cultural events, student fests, and competitions throughout the year.",
    icon: "🎭",
  },
];

const Facilities = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#0e2e5f] mb-6">Campus Facilities</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {facilities.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-white p-6 rounded-lg border shadow"
          >
            <div className="text-4xl">{item.icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-[#b80d27] mb-1">{item.title}</h2>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
