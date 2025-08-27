import React from "react";
import { motion } from "framer-motion";

const Tiltedtext = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="gap-6 flex flex-col py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10"
    >
      <span className="flex flex-wrap items-center gap-3 mb-4 sm:mb-5">
        <p className="text-3xl sm:text-4xl md:text-6xl mt-2 sm:mt-3 md:mt-5 w-full sm:w-[600px] md:w-[800px] font-black-ops-one-regular text-gray-400 uppercase dotted-gradient-text">
          Nishant Pathak
        </p>
      </span>

      <p className="text-base sm:text-lg md:text-[30px] mt-3 sm:mt-4 md:mt-5 text-white w-full sm:w-[600px] md:w-[800px] font-iceland">
        React Enthusiast | Responsive Design | UI/UX Design
      </p>

      <span className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 mt-10 sm:mt-14 md:mt-20 font-lexend-exa ml-0 sm:ml-10 md:ml-20">
        <button
          className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                     px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg"
        >
          View My Project
        </button>

        <button
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                     px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg"
        >
          Contact Me!
        </button>
      </span>
    </motion.div>
  );
};

export default Tiltedtext;
