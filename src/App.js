// App.js
import React, { useEffect, useRef, useState } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./Header";
import Footer from "./Footer";
import Departments from "./pages/Departments";
import Courses from "./pages/Courses";
import Syllabus from "./pages/Syllabus";
import Results from "./pages/Results";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Notices from "./pages/Notices";

function App() {
  const navRef = useRef(null);
  const [showCollegeName, setShowCollegeName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navTop = navRef.current?.getBoundingClientRect().top;
      setShowCollegeName(navTop <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.StrictMode>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-gray-100">
          {/* Fixed Header */}
          <Header />

          {/* Sticky Navbar */}
          <nav
            ref={navRef}
            className="sticky top-0 z-50 w-full bg-white shadow border-b transition-all duration-300"
          >
            <div className="px-4 pt-2 pb-1">
              {/* Conditionally Show College Name */}
              {showCollegeName && (
                <div className="text-[#b80d27] font-bold text-sm sm:text-lg mb-1 transition-opacity duration-300">
                  Atal Behari College, Basudevpur
                </div>
              )}

              {/* Navigation Tabs */}
              <ul className="flex justify-start md:justify-center overflow-x-auto whitespace-nowrap gap-4 text-base font-medium scrollbar-hide">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/courses", label: "Courses" },
                  { path: "/departments", label: "Departments" },
                  { path: "/notices", label: "Notices" },
                  { path: "/syllabus", label: "Syllabus" },
                  { path: "/results", label: "Results" },
                  { path: "/facilities", label: "Facilities" },
                  { path: "/gallery", label: "Gallery" },
                  { path: "/contact", label: "Contact" },
                ].map(({ path, label }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#b80d27] border-b-2 border-[#b80d27] pb-1"
                          : "text-gray-700 hover:text-[#b80d27]"
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Page Content */}
          <main className="flex-grow w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/results" element={<Results />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/notices" element={<Notices />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;
