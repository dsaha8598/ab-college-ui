// src/pages/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#0e2e5f] mb-6">Contact Us</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="bg-white p-6 rounded-lg border shadow">
          <h2 className="text-xl font-semibold text-[#b80d27] mb-4">College Address</h2>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Atal Behari College</strong><br />
            Basudevpur, Bhadrak, Odisha - 756125
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:abcollege@gmail.com" className="text-blue-600 hover:text-[#b80d27] underline">
              abcollege@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Website:</strong>{" "}
            <a
              href="http://www.abcollegebasudevpur.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-[#b80d27] underline"
            >
              www.abcollegebasudevpur.org.in
            </a>
          </p>
        </div>

        {/* Google Map Embed */}
        <div className="h-64 lg:h-auto w-full rounded-lg overflow-hidden shadow border">
          <iframe
            title="Atal Behari College Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.637900116897!2d86.73598477512562!3d21.146758185896826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bbddc38a03a3b%3A0xbbe2b013d4727b7a!2sAtal%20Behari%20College!5e0!3m2!1sen!2sin!4v1720963532657!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Optional Contact Form (non-functional placeholder) */}
      <div className="mt-10 bg-white p-6 rounded-lg border shadow">
        <h2 className="text-xl font-semibold text-[#b80d27] mb-4">Send a Message</h2>
        <form className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded p-2 text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded p-2 text-sm"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border rounded p-2 text-sm sm:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="bg-[#b80d27] hover:bg-[#9c0b1f] text-white font-semibold py-2 px-4 rounded sm:col-span-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
