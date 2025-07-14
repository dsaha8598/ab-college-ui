// App.js
import React from "react";
import {  HashRouter, Routes, Route, NavLink } from "react-router-dom";
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
  return (
    <React.StrictMode>
      <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Sticky Header */}
        <Header />

        {/* Sticky Nav Bar (adjusted for mobile view below header) */}
        <nav className="sticky top-[136px] z-40 w-full bg-white shadow border-b">
          <ul className="flex justify-start md:justify-center overflow-x-auto whitespace-nowrap px-2 py-3 gap-4 text-lg font-medium scrollbar-hide">
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
        </nav>

        {/* Main Content */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Placeholder Routes */}
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
