import React from "react";

// Sample faculty data
const facultyMembers = [
  {
    name: "Dr. S.K. Dash",
    title: "HOD, Department of Physics",
    image: "alumni1.jpg",
  },
  {
    name: "Prof. R. Mishra",
    title: "Lecturer, Department of History",
    image: "alumni1.jpg",
  },
  {
    name: "Ms. L. Patnaik",
    title: "HOD, Department of English",
    image: "alumni1.jpg",
  },
];

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 space-y-12">
      {/* Hero Banner */}
      <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden shadow">
        <img
          src={`${process.env.PUBLIC_URL}/images/college.jpg`}
          alt="College Campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* History Section */}
      <section>
        <h2 className="text-3xl font-bold text-[#0e2e5f] mb-4">Our History</h2>
        <p className="text-gray-800 leading-relaxed text-base">
          Atal Behari College, Basudevpur was established on July 3rd, 1963 by the vision of Late Jagabandhu and Bhagaban Nayak in honor of Late Atal Behari Nayak. 
          From humble beginnings with 98 students and 6 lecturers, it has evolved into a premier institution affiliated to CHSE Odisha and Fakir Mohan University.
          The college offers +2 and +3 programs across Arts, Science, and Commerce streams with honors in over 10 subjects.
        </p>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-[#0e2e5f] mb-2">Vision & Mission</h2>
        <p className="text-gray-800 whitespace-pre-line text-base leading-relaxed">
          To provide accessible and inclusive education to students in rural Odisha.
          To foster intellectual growth, moral integrity, and social responsibility.
          To become a center of excellence in higher education and leadership development.
        </p>
      </section>

      {/* Location Section */}
      <section>
        <h2 className="text-2xl font-bold text-[#0e2e5f] mb-2">Our Location</h2>
        <p className="text-gray-800 text-base">
          Located 1 km east of Basudevpur town in Bhadrak district, Odisha, the college campus is surrounded by serene greenery, creating an ideal learning environment. It is well connected by road and close to Basudevpur High School.
        </p>
        <div className="mt-4 rounded overflow-hidden shadow-lg">
          <img
            src={`${process.env.PUBLIC_URL}/images/location.jpg`}
            alt="Map Location"
            className="w-full h-64 object-cover"
          />
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section>
        <h2 className="text-2xl font-bold text-[#0e2e5f] mb-6">Faculty Spotlight</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((faculty, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow text-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/${faculty.image}`}
                alt={faculty.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
              />
              <h4 className="text-lg font-semibold text-[#b80d27]">{faculty.name}</h4>
              <p className="text-sm text-gray-600">{faculty.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
