import React from 'react';

export default function Header() {
  return (
    <header className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-gray-900 text-white flex flex-col md:flex-row items-center justify-center text-center md:text-left px-8">
    
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
        <img 
          src="../src/profile.jpg" 
          alt="Ashutosh Khanal" 
          className="w-25 h-45 md:w-45 md:h-52 rounded-full border-4 border-blue-400 shadow-lg transform hover:scale-105 transition-all"
        />
      </div>

      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I'm <span className="text-blue-300">Ashutosh Khanal</span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-300 mt-2">
          Front-End Developer & UI Enthusiast
        </p>
        <p className="max-w-lg mt-4 text-gray-400">
          I specialize in building interactive, modern, and accessible web applications using React, Tailwind CSS, and JavaScript. Let's create something amazing together!
        </p>


        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all">
            View My Work
          </a>
          <a href="mailto:khanala705@gmail.com" className="px-6 py-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all">
           Email
          </a>
        </div>

        <div className="mt-6 flex justify-center md:justify-start space-x-6">
          <a href="https://www.linkedin.com/in/ashutosh-khanal-398b542b5" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-300 hover:text-blue-400 transition-all">
            🔗 LinkedIn
          </a>
          <a href="https://github.com/ashutoshKhanal313" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-300 hover:text-blue-400 transition-all">
            🐙 GitHub
          </a>
          <a href="/InternShipResume.pdf" download="Ashutosh_Khanal_Resume.pdf" 
          className="text-2xl text-blue-300 hover:text-blue-400 transition-all">
            📄 Resume
          </a>
        </div>
      </div>
    </header>
  );
}
