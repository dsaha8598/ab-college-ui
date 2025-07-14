// src/pages/Notices.js
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

// Sample notices — can be replaced with data from an API or JSON file
const notices = [
  { date: "2025-07-01", text: "College will remain closed on 15th August for Independence Day." },
  { date: "2025-07-02", text: "Internal exams will commence from 10th August." },
  { date: "2025-07-03", text: "New semester registration deadline is 5th August." },
  { date: "2025-06-28", text: "Admit cards available for +3 final exams." },
  { date: "2025-06-25", text: "Annual sports meet scheduled on 22nd August." },
  { date: "2025-06-20", text: "Submission of practical records ends on 18th July." },
];

const Notices = () => {
  return (
    <div className="max-w-screen-md mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#0e2e5f] mb-6">Official Notices</h1>

      <div className="space-y-4">
        {notices.map((item, index) => (
          <div key={index} className="bg-white border rounded-lg shadow p-4">
            <div className="flex items-center text-xs text-gray-600 mb-1">
              <FaRegCalendarAlt className="text-[#b80d27] mr-2" />
              {item.date}
            </div>
            <div className="text-sm text-gray-800">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
