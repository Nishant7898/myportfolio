import React from "react";
import { motion } from "framer-motion";

const skills = ["Frontend Developer", "React Enthusiast", "UI/UX Builder"];

const TiltedText = () => {
  return (
    <div className="py-[150px] sm:py-[200px] md:py-[280px] px-6 sm:px-10 md:px-[80px]">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-white justify-start font-bold gap-3 sm:gap-5 text-3xl sm:text-4xl md:text-[50px] flex flex-wrap sm:flex-nowrap items-center"
      >
        Hi, I Am{" "}
        <h1 className="text-4xl sm:text-5xl md:text-[60px] uppercase font-extrabold text-red-500">
          Nishant Pathak
        </h1>
      </motion.span>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl px-2 sm:px-6 md:px-[40px] mt-4 text-white font-semibold text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        I Build Modern, Responsive And User Friendly Web Experiences
      </motion.p>

      <div className="flex flex-wrap justify-center sm:justify-start px-4 sm:px-10 md:px-20 mt-6 sm:mt-8 gap-2">
        {skills.map((skill, index) => (
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl text-white gap-2"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.5 + 1, // stagger effect
            }}
          >
            | {skill} |
          </motion.h2>
        ))}
      </div>
    </div>
  );
};

export default TiltedText;
