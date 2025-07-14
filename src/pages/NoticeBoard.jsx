import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const notices = [
  { date: "2025-07-01", text: "College will remain closed on 15th August for Independence Day." },
  { date: "2025-07-02", text: "Internal exams will commence from 10th August." },
  { date: "2025-07-03", text: "New semester registration deadline is 5th August." },
  { date: "2025-07-01", text: "College will remain closed on 15th August for Independence Day." },
  { date: "2025-07-02", text: "Internal exams will commence from 10th August." },
  { date: "2025-07-03", text: "New semester registration deadline is 5th August." }
];

const news = [
  { date: "2025-06-25", text: "College receives NAAC A+ accreditation." },
  { date: "2025-06-28", text: "Annual tech fest scheduled for October." },
  { date: "2025-06-30", text: "Inter-college debate competition winners announced." }
];

const NoticeBoard = () => {
  const [activeTab, setActiveTab] = useState("notices");
  const items = activeTab === "notices" ? notices : news;

useEffect(() => {
  const container = document.getElementById("notice-scroll");
  let scrollInterval;

  const startAutoScroll = () => {
    scrollInterval = setInterval(() => {
      if (container) {
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          container.scrollTop = 0;
        } else {
          container.scrollTop += 1;
        }
      }
    }, 60);
  };

  const stopAutoScroll = () => clearInterval(scrollInterval);

  container?.addEventListener("mouseenter", stopAutoScroll);
  container?.addEventListener("mouseleave", startAutoScroll);

  startAutoScroll();

  return () => {
    stopAutoScroll();
    container?.removeEventListener("mouseenter", stopAutoScroll);
    container?.removeEventListener("mouseleave", startAutoScroll);
  };
}, [activeTab]);


  return (
    <div className="border rounded-lg shadow-lg bg-white min-h-[320px] h-full overflow-hidden">
      {/* Board Heading */}
      <div className="bg-[#0e2e5f] text-white text-center py-2 font-semibold">
        {activeTab === "notices" ? "Notices" : "News"}
      </div>

      {/* Tab Selector */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-2 text-sm font-bold border-b-2 transition-colors ${
            activeTab === "notices"
              ? "text-[#b80d27] border-[#b80d27]"
              : "text-gray-600 border-transparent"
          }`}
          onClick={() => setActiveTab("notices")}
        >
          Notices
        </button>
        <button
          className={`flex-1 py-2 text-sm font-bold border-b-2 transition-colors ${
            activeTab === "news"
              ? "text-[#b80d27] border-[#b80d27]"
              : "text-gray-600 border-transparent"
          }`}
          onClick={() => setActiveTab("news")}
        >
          News
        </button>
      </div>

      {/* Content List */}
      <ul
        id="notice-scroll"
        className="p-4 space-y-4 text-sm text-gray-800 max-h-[240px] overflow-y-auto"
      >
        {items.length ? (
          items.map((item, i) => (
            <li key={i} className="bg-gray-50 p-2 rounded shadow-sm">
              <div className="flex items-center text-xs text-gray-600 mb-1">
                <FaRegCalendarAlt className="mr-2 text-[#b80d27]" />
                {item.date}
              </div>
              <div className="text-gray-900">{item.text}</div>
            </li>
          ))
        ) : (
          <li className="text-gray-400">No items to display.</li>
        )}
      </ul>
    </div>
  );
};

export default NoticeBoard;
