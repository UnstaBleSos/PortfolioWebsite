import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function Header() {
  const nameRef = useRef();
  const partRef = useRef();
  const despRef = useRef();
  const headRef = useRef();

  useGSAP(() => {
    gsap.from(nameRef.current, {
      y: -300,
      opacity: 0,
      duration: 1.9,
      delay: 0.7,
    });
  });

  useGSAP(() => {
    gsap.from(partRef.current, {
      x: -80,
      opacity: 0,
      duration: 1.2,
      delay: 0.9,
      ease: "power3.out",
    });
  });

  useGSAP(() => {
    gsap.from(despRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.5,
      delay: 1,
      ease: "power3.out",
    });
  });

  return (
    <header className="font-mono min-h-screen  text-black flex flex-col md:flex-row items-center justify-center text-center md:text-left px-8">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12"></div>

      <div>
        <h1 className="text-6xl md:text-5xl font-extrabold  leading-tight">
          Hi, I'm{" "}
          <span className="text-black-300 text-6xl" ref={nameRef}>
            Ashutosh Khanal
          </span>
        </h1>

        <p className="max-w-lg mt-4 text-gray-500" ref={despRef}>
          I specialize in building interactive, modern, and accessible web
          applications using React, Tailwind CSS, and JavaScript. Let's create
          something amazing together!
        </p>

        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-3 border-2  rounded-lg text-lg font-semibold  transition-all"
          >
            View My Work
          </a>
          <a
            href="mailto:khanala705@gmail.com"
            className="px-6 py-3 bg-transparent border-2   rounded-lg text-lg font-semibold   transition-all"
          >
            Email
          </a>
        </div>

        <div className="mt-6 flex justify-center md:justify-start space-x-6 ">
          <a
            href="https://www.linkedin.com/in/ashutosh-khanal-398b542b5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl   transition-all"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/ashutoshKhanal313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl  transition-all"
          >
            🐙 GitHub
          </a>
          <a
            href="/InternShipResume.pdf"
            download="Ashutosh_Khanal_Resume.pdf"
            className="text-2xl  transition-all"
          >
            📄 Resume
          </a>
        </div>
      </div>
    </header>
  );
}
