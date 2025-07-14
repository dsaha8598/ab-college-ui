// src/pages/Courses.js
import React from "react";

const courses = [
  {
    level: "+2 (Higher Secondary)",
    affiliation: "Affiliated to CHSE, Odisha",
    streams: [
      {
        name: "Arts",
        subjects: ["Odia", "English", "History", "Political Science", "Sanskrit", "Economics", "Education", "Hindustani Music (Vocal)"],
      },
      {
        name: "Science",
        subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      },
      {
        name: "Commerce",
        subjects: ["Business Studies", "Accountancy", "Economics"],
      },
    ],
  },
  {
    level: "+3 (Undergraduate Degree)",
    affiliation: "Affiliated to Fakir Mohan University",
    streams: [
      {
        name: "Arts (B.A.)",
        honors: ["English", "Odia", "History", "Political Science", "Sanskrit", "Economics"],
      },
      {
        name: "Science (B.Sc.)",
        honors: ["Physics", "Chemistry", "Mathematics", "Zoology"],
      },
      {
        name: "Commerce (B.Com.)",
        honors: ["Accountancy"],
      },
    ],
  },
];

const Courses = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#0e2e5f] mb-6">Courses Offered</h1>

      {courses.map((course, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-xl font-semibold text-[#b80d27] mb-1">{course.level}</h2>
          <p className="text-sm text-gray-600 mb-4">{course.affiliation}</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {course.streams.map((stream, index) => (
              <div key={index} className="bg-white rounded-lg shadow border p-4">
                <h3 className="text-lg font-medium text-[#0e2e5f] mb-2">{stream.name}</h3>
                <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
                  {(stream.subjects || stream.honors || []).map((subject, i) => (
                    <li key={i}>{subject}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
