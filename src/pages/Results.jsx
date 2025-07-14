// src/pages/Results.js
import React from "react";

const internalResults = [
  {
    title: "Internal Exam – Arts Stream",
    session: "2024–25",
    file: "/pdfs/results/internal-arts.pdf",
  },
  {
    title: "Internal Exam – Science Stream",
    session: "2024–25",
    file: "/pdfs/results/internal-science.pdf",
  },
  {
    title: "Internal Exam – Commerce Stream",
    session: "2024–25",
    file: "/pdfs/results/internal-commerce.pdf",
  },
];

const externalResults = [
  {
    title: "+2 CHSE Results (Official Portal)",
    link: "https://orissaresults.nic.in/",
  },
  {
    title: "+3 Degree Results (Fakir Mohan University)",
    link: "https://www.fmuniversity.nic.in/",
  },
];

const Results = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#0e2e5f] mb-6">Results</h1>

      {/* Internal Results Section */}
      <section className="mb-10 bg-white p-6 border rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-[#b80d27] mb-4">Internal Results</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
          {internalResults.map((result, idx) => (
            <li key={idx}>
              <span className="font-medium">{result.session} – </span>
              <a
                href={result.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-[#b80d27] underline"
              >
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* External Results Section */}
      <section className="bg-white p-6 border rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-[#b80d27] mb-4">Board/University Results</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
          {externalResults.map((res, idx) => (
            <li key={idx}>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-[#b80d27] underline"
              >
                {res.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Results;
