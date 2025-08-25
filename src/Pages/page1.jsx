import React from "react";
import photo from "../assets/bg.jpg";
import TiltedText from "../Components/TiltedText";
import { motion } from "framer-motion";

const Page1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="h-screen bg-white px-8 py-5"
    >
      <div
        style={{
          backgroundImage: `url(${photo})`,
     
          backgroundPosition: `right center`,
          backgroundSize: `auto`,
        }}
        className=" rounded-[50px] shadow-gray-600 shadow-xl h-full w-full"
      >
     <TiltedText/>
      </div>
    </motion.div>
  );
};

export default Page1;
