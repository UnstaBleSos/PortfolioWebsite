import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function About() {
  const aboutRef = useRef();
  const sectionRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(aboutRef.current, {
      x: 300,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(2)",
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        scroller: "body",

        start: "top 50%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <section className="font-mono text-black  py-12 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <h3 className="text-[30px] mb-6" ref={aboutRef}>
          I'm a passionate front-end developer with a keen eye for design and
          performance. I enjoy working with modern web technologies like React,
          Tailwind CSS, and JavaScript to build beautiful, responsive websites.
          I'm always eager to learn new skills and take on new challenges.
        </h3>
      </div>
    </section>
  );
}
