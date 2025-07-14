import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NoticeBoard from "./NoticeBoard";
import AboutUs from "./AboutUs";

// Slides
const slides = [
  {
    title: "Welcome to Atal Bihari College",
    text: "Empowering the youth of Basudevpur through quality education and cultural values.",
    image: `${process.env.PUBLIC_URL}/images/college.jpg`,
  },
  {
    title: "Principal's Message",
    text: "Our mission is to cultivate knowledge, inspire innovation, and nurture values.",
    image: `${process.env.PUBLIC_URL}/images/slide1.jpeg`,
  },
  {
    title: "Upcoming Notice",
    text: "Admissions open for 2025–26 academic year. Apply now and be part of our legacy.",
    image: `${process.env.PUBLIC_URL}/images/slide2.jpg`,
  },
  {
    title: "Campus Life",
    text: "Discover our vibrant campus life, student activities, and green learning environment.",
    image: `${process.env.PUBLIC_URL}/images/slide3.jpeg`,
  },
];

// Mission
const mission = `To provide quality education in rural areas irrespective of the socio‑economic class of the students;
to mould the mindset of the students as conscientious individuals capable of leading the nation towards progress and prosperity;
to promote exchange of thoughts, beliefs, ideas and to serve as an initiator and propagator of them all.`;

// Quick Link
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
  const [paused, setPaused] = useState(false);
  const pauseTimeout = useRef(null);

  const handlePrev = () => {
    setDirection(1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    pauseAutoSlide();
  };

  const handleNext = () => {
    setDirection(-1);
    setIndex((prev) => (prev + 1) % slides.length);
    pauseAutoSlide();
  };

  const pauseAutoSlide = () => {
    setPaused(true);
    clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setPaused(false), 2000); // resume after 10s
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(-1);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = slides[index];

  return (
    <div className="w-full">
      {/* Hero Carousel */}
      <div className="relative w-full h-[calc(100vh-8rem)] mt-[8rem] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.title}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-[#0e2e5f]/70 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow">
                {slide.title}
              </h1>
              <p className="mt-4 text-lg sm:text-2xl text-gray-200 max-w-2xl">
                {slide.text}
              </p>
              <button className="mt-6 bg-[#b80d27] hover:bg-[#9c0b1f] text-white font-semibold px-6 py-3 rounded shadow">
                Learn More
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#0e2e5f] rounded-full p-2 shadow"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#0e2e5f] rounded-full p-2 shadow"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Quick Links */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white border rounded-lg shadow-sm p-4">
          <QuickLink icon="📘" label="Syllabus" href="/syllabus" />
          <QuickLink icon="🏛️" label="Departments" href="/departments" />
          <QuickLink icon="📚" label="Courses" href="/courses" />
          <QuickLink icon="📰" label="Magazine" href="/magazine" />
        </div>
      </div>

      {/* About Preview */}
      <AboutUs />

      {/* College Stats */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-[#0e2e5f] text-sm sm:text-lg font-medium">
          <div className="bg-white rounded-lg shadow p-3 border">🎓 1328+ Students</div>
          <div className="bg-white rounded-lg shadow p-3 border">🧑‍🏫 31+ Faculty</div>
          <div className="bg-white rounded-lg shadow p-3 border">🏛️ 7 Departments</div>
          <div className="bg-white rounded-lg shadow p-3 border">🏠 Hostel for 100+</div>
          <div className="bg-white rounded-lg shadow p-3 border">📚 15+ Courses</div>
          <div className="bg-white rounded-lg shadow p-3 border">🎉 Since 1963</div>
        </div>
      </div>

      {/* Principal's Message */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-md flex flex-col lg:flex-row overflow-hidden">
          <div className="lg:w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/images/principal.jpg`}
              alt="Principal"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-2/3 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#0e2e5f] mb-2">Principal's Message</h3>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
              “Welcome to Atal Behari College. Since its founding in 1963, this institution has stood as a beacon of inclusive and quality education in rural Odisha.
              We aim to nurture intellect, character, and commitment among our students. I invite all students and parents to explore our academic legacy,
              experience our vibrant learning environment, and help us build a better tomorrow.”
            </p>
            <p className="text-sm font-semibold text-[#b80d27]">Dr. Chinmayee Senapati</p>
            <p className="text-sm text-gray-600">Principal, Atal Behari College</p>
          </div>
        </div>
      </div>

      {/* Alumni Showcase */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-[#0e2e5f] mb-6">Our Proud Alumni</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Anita Das",
              position: "IAS Officer, Govt. of Odisha",
              image: "alumni1.jpg",
              message: "The education and discipline I received here laid the foundation of my civil service journey.",
            },
            {
              name: "Rajesh Nayak",
              position: "Lecturer, FM University",
              image: "alumni1.jpg",
              message: "A.B. College gave me the platform and mentors I needed to pursue higher education and teaching.",
            },
            {
              name: "Pratiksha Behera",
              position: "Software Engineer, Infosys",
              image: "alumni1.jpg",
              message: "Coming from a small town, this college made me believe I could compete globally.",
            },
          ].map((alumni, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow border text-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/${alumni.image}`}
                alt={alumni.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold text-[#b80d27]">{alumni.name}</h4>
              <p className="text-sm text-gray-600">{alumni.position}</p>
              <p className="text-sm text-gray-800 mt-2 italic">“{alumni.message}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission + Notice Board */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-[#b80d27] mb-3">Our Mission</h3>
          <p className="text-gray-800 text-base whitespace-pre-line mb-4">{mission}</p>
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
