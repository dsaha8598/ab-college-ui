import React, { useState } from "react";

const aboutText = `The Atal Behari College, Basudevpur, one of the premier Education institutions of Bhadrak district, has like any other such institutions of its kind, a chequred history of its own, the college is named after late Atal Behari Nayak , an eminent businessman of the locality, whose two worthy sons, Late Jagabandhu Nayak and Late Bhagaban Nayak, with a number of local enthusiastas pioneered the establishment of the college with a view to impating higher education to the younger generation of the locality. Sri Gobardhan Nayak, the worthy grandson of Late Atal Behari Nayak is the permanent member of the G.B. as doner. The Atal Behari College was established on 3rd July , 1963. It started functioning in the local High School building with only Pre-University Humanities class having roll strength of 98 students and six lecturers. In the year 1965 the College was shifted to its own temporary building situated at the open field surrounded by natural sights at distance of 1 km. eastward of the town. Since then, the college has never looked back and has been galloping towards perfection in all spheres of activities. The CHSE, Orissa came into existence in 1983 to accommodate the +2 stream of courses after secondary education in consonance with the all India UGC pattern of education. Our college is affiliated to CHSE, Orissa. It is an affiliated college under the Fakir Mohan University which has its headquarters at Vyasa Vihar, Balasore. A.B College at present is full-fledged degree college with classes in commerce, science and arts with honors in English, Economics, History, Political Science, Oriya, Sanskrit, Physics, Chemistry, Mathematics, Zoology and Accountancy. Hindustani Music (Vocal) was introduced in the year 2003 as one of the optional subjects of +2 arts stream. In short, the present infrastructural and the academic development of the college would not have been possible without the combined efforts of the Principals, his staff members, students and the local public as a whole. Last but not the least:- the help extended by the local M.L.A. and M.Ps has gone a long way in the expeditious implementation of recent developmental schemes of the college.`;

const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);
  const shortText = aboutText.slice(0, 500) + "...";

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        {/* Left: Text */}
        <div className="lg:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#0e2e5f] mb-4">About Us</h2>
          <p className="text-gray-800 text-base leading-relaxed">
            {expanded ? aboutText : shortText}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 inline-block bg-[#b80d27] hover:bg-[#9c0b1f] text-white text-sm font-semibold px-4 py-2 rounded transition"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2 h-64 lg:h-auto">
          <img
            src="images/college.jpg"
            alt="Atal Behari College"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
