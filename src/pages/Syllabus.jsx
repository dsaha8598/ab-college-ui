// src/pages/Syllabus.js
import React from "react";

const syllabusData = [
  {
    level: "+2 (Higher Secondary)",
    affiliation: "CHSE, Odisha",
    items: [
      { name: "Arts Stream", url: "/pdfs/+2-arts-syllabus.pdf" },
      { name: "Science Stream", url: "/pdfs/+2-science-syllabus.pdf" },
      { name: "Commerce Stream", url: "/pdfs/+2-commerce-syllabus.pdf" },
    ],
  },
  {
    level: "+3 (Degree)",
    affiliation: "Fakir Mohan University",
    items: [
      { name: "BA (Hons)", url: "/pdfs/+3-ba-syllabus.pdf" },
      { name: "BSc (Hons)", url: "/pdfs/+3-bsc-syllabus.pdf" },
      { name: "BCom (Hons)", url: "/pdfs/+3-bcom-syllabus.pdf" },
    ],
  },
];

const Syllabus = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#0e2e5f] mb-6">Syllabus</h1>

      {syllabusData.map((section, idx) => (
        <div key={idx} className="mb-8 bg-white p-6 border rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-[#b80d27] mb-1">{section.level}</h2>
          <p className="text-sm text-gray-700 mb-4">Affiliated to: {section.affiliation}</p>

          <ul className="list-disc list-inside text-sm text-gray-800">
            {section.items.map((item, i) => (
              <li key={i} className="mb-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-[#b80d27] underline"
                >
                  {item.name} – Download PDF
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Syllabus;
    