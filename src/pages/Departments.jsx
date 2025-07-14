// src/pages/Departments.js
import React from "react";

const departments = [
  {
    name: "English",
    description:
      "The Department of English offers +2 and +3 programs with Honours in English Literature. It emphasizes both classical and contemporary literature, language skills, and communication.",
  },
  {
    name: "Odia",
    description:
      "Odia department nurtures regional literature and cultural identity. Courses span from ancient poetry to modern Odia prose.",
  },
  {
    name: "History",
    description:
      "With a focus on Indian and world history, the department promotes analytical skills and research methodology.",
  },
  {
    name: "Political Science",
    description:
      "Offers insights into political theory, public administration, and Indian polity. Ideal for students aiming for civil services.",
  },
  {
    name: "Economics",
    description:
      "Equips students with micro and macroeconomic understanding, useful for careers in finance, public policy, and academia.",
  },
  {
    name: "Sanskrit",
    description:
      "The department focuses on classical texts, grammar, and ancient Indian philosophy and traditions.",
  },
  {
    name: "Physics",
    description:
      "Physics department offers strong theoretical and experimental grounding for careers in research, teaching, or engineering.",
  },
  {
    name: "Chemistry",
    description:
      "Covers organic, inorganic, and physical chemistry, with practical lab exposure to prepare students for scientific careers.",
  },
  {
    name: "Mathematics",
    description:
      "Mathematics courses blend algebra, calculus, and statistics with real-world application across science and commerce.",
  },
  {
    name: "Zoology",
    description:
      "Zoology department introduces students to animal biology, physiology, ecology, and field study.",
  },
  {
    name: "Commerce & Accountancy",
    description:
      "Covers core principles in accounting, business studies, economics, and finance — with B.Com. (Hons) in Accountancy.",
  },
  {
    name: "Hindustani Music (Vocal)",
    description:
      "An optional subject under +2 Arts that nurtures Indian classical music appreciation and performance.",
  },
];

const Departments = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#0e2e5f] mb-6">Departments</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {departments.map((dept, i) => (
          <div key={i} className="bg-white p-5 rounded-lg shadow border">
            <h2 className="text-xl font-semibold text-[#b80d27] mb-2">{dept.name}</h2>
            <p className="text-sm text-gray-800">{dept.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
