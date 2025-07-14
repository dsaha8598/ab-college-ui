import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NoticeBoard from "./NoticeBoard";
import AboutUs from "./AboutUs";

// Slides data
const slides = [
  {
    title: "Welcome to Atal Bihari College",
    text: "Empowering the youth of Basudevpur through quality education and cultural values.",
    image:  `${process.env.PUBLIC_URL}/images/college.jpg`,
  },
  {
    title: "Principal's Message",
    text: "Our mission is to cultivate knowledge, inspire innovation, and nurture values.",
    image: `${process.env.PUBLIC_URL}/images/slide1.jpeg`,
  },
  {
    title: "Upcoming Notice",
    text: "Admissions open for 2025–26 academic year. Apply now and be part of our legacy.",
    image:`${process.env.PUBLIC_URL}/images/slide2.jpg`,
  },
  {
    title: "Campus Life",
    text: "Discover our vibrant campus life, student activities, and green learning environment.",
    image: `${process.env.PUBLIC_URL}/images/slide3.jpeg`,
  },
  {
    title: "Principal's Message",
    text: "Our mission is to cultivate knowledge, inspire innovation, and nurture values.",
    image: `${process.env.PUBLIC_URL}/images/slide4.jpg`,
  }
];

// Mission text
const mission = `To provide quality education in rural areas irrespective of the socio‑economic class of the students; 
to mould the mindset of the students as conscientious individuals capable of leading the nation towards progress and prosperity; 
to promote exchange of thoughts, beliefs, ideas and to serve as an initiator and propagator of them all.`;

// Quick Link Item
const QuickLink = ({ icon, label, href }) => (
  <a
    href={href}
    className="flex items-center gap-2 text-[#0e2e5f] hover:text-[#b80d27] transition font-medium text-sm sm:text-base"
  >
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
  </a>
);

const Home = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(-1);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <div className="w-full">
      {/* Full-width Carousel */}
      <div className="relative w-full h-[calc(100vh-8rem)] mt-[8rem]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.title}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center flex flex-col sm:flex-row"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="sm:w-1/2 bg-white/80 sm:bg-transparent px-6 py-8 flex items-center">
              <div className="max-w-md text-black space-y-4">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#081828]">
                  {slide.title}
                </h2>
                <p className="text-gray-800 text-base">{slide.text}</p>
                <button className="bg-[#b80d27] hover:bg-[#9c0b1f] text-white font-semibold py-2 px-4 rounded shadow">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/2" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white border rounded-lg shadow-sm p-4">
          <QuickLink icon="📘" label="Syllabus" href="/syllabus" />
          <QuickLink icon="🏛️" label="Departments" href="/departments" />
          <QuickLink icon="📚" label="Courses" href="/courses" />
          <QuickLink icon="📰" label="Magazine" href="/magazine" />
        </div>
      </div>

      {/* About Us Section */}
      <AboutUs />

      {/* College Stats Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-[#0e2e5f] text-sm sm:text-lg font-medium">
          <div className="bg-white rounded-lg shadow p-3 border">🎓 1200+ Students</div>
          <div className="bg-white rounded-lg shadow p-3 border">🧑‍🏫 48 Faculty</div>
          <div className="bg-white rounded-lg shadow p-3 border">🏛️ 7 Departments</div>
          <div className="bg-white rounded-lg shadow p-3 border">🏠 Hostel for 100+</div>
          <div className="bg-white rounded-lg shadow p-3 border">📚 15+ Courses</div>
          <div className="bg-white rounded-lg shadow p-3 border">🎉 30+ Years Legacy</div>
        </div>
      </div>

      {/* Mission & Notice Board */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-[#b80d27] mb-3">Our Mission</h3>
          <p className="text-gray-800 text-base whitespace-pre-line mb-4">
            {mission}
          </p>
          <blockquote className="italic text-sm text-gray-600 border-l-4 border-[#b80d27] pl-4">
            “Education is the most powerful weapon which you can use to change the world.”
            <span className="block mt-1 text-right text-xs">— Founder</span>
          </blockquote>
        </div>
        <div className="w-full lg:w-1/3">
          <NoticeBoard />
        </div>
      </div>
    </div>
  );
};

export default Home;
