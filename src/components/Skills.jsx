import React from "react";

export default function Skills() {
  return (
    <section className="text-black py-12 px-4 font-mono">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex items-center justify-center p-6  ">
            <p className="text-lg font-semibold">React</p>
          </div>
          <div className="flex items-center justify-center p-6  ">
            <p className="text-lg font-semibold">Tailwind CSS</p>
          </div>
          <div className="flex items-center justify-center p-6  ">
            <p className="text-lg font-semibold">JavaScript</p>
          </div>
          <div className="flex items-center justify-center p-6  ">
            <p className="text-lg font-semibold">HTML & CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
