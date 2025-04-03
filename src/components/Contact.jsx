import React from 'react';

export default function Contact() {
  return (
    <section className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-6">Feel free to reach out to me through email or social media.</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:khanala705@gmail.com" className="text-xl text-white hover:text-blue-300 transition-all">
            Email
          </a>
          <a href="https://www.linkedin.com/in/ashutosh-khanal-398b542b5" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-blue-300 transition-all">
            LinkedIn
          </a>
          <a href="https://github.com/ashutoshKhanal313" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-blue-300 transition-all">
            GitHub
          </a>
          <a href="https://www.instagram.com/psych002?utm_source=qr&igsh=MXY0MmJyM2U4ejNzbA==" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-blue-300 transition-all">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
