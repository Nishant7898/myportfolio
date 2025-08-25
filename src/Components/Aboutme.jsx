import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="bg-[#0f0f0f] rounded-2xl sm:rounded-3xl md:rounded-[50px] text-white py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8"
        >
          About Me
        </motion.h2>

        {/* Short Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-10 px-2 sm:px-6 md:px-0"
        >
          A <span className="text-cyan-400">Frontend Developer</span> who loves
          building modern, responsive, and user-friendly web applications. I
          work mainly with <span className="text-yellow-400">React</span>,{" "}
          <span className="text-blue-400">Redux</span>, and{" "}
          <span className="text-green-400">Tailwind CSS</span>.
        </motion.p>

        {/* Skills / Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 sm:mt-10">
          {[
            {
              title: "Frontend Development",
              desc: "Creating modern, interactive UIs using React & Tailwind.",
            },
            {
              title: "State Management",
              desc: "Managing app state with Redux Toolkit & Context API.",
            },
            {
              title: "UI/UX Design",
              desc: "Building user-friendly and responsive designs.",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1a1a1a] p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-cyan-500/30"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
