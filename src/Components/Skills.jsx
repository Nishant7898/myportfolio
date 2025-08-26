import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeCss } from "react-icons/bs";
import {
  TbBrandRedux,
  TbBrandThreejs,
  TbBrandFramerMotion,
} from "react-icons/tb";
import { SiNetlify } from "react-icons/si";

const icons = [
  {
    name: "Reactjs",
    icon: <FaReact className="text-sky-500 text-7xl animate-spin " />,
    level: "Intermediate",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="text-yellow-500 text-7xl animate-pulse" />,
    level: "Intermediate",
  },
  {
    name: "Redux",
    icon: <TbBrandRedux className="text-blue-500 text-7xl animate-wiggle" />,
    level: "Intermediate",
  },
  {
    name: "TailwindCss",
    icon: <RiTailwindCssFill className="text-sky-500 text-7xl animate-fade-in" />,
    level: "Intermediate",
  },
  {
    name: "HTML",
    icon: <TiHtml5 className="text-blue-500 text-7xl" />,
    level: "Intermediate",
  },
  {
    name: "Css",
    icon: <BsFiletypeCss className="text-blue-500 text-7xl" />,
    level: "Intermediate",
  },
  {
    name: "Github",
    icon: <FaGithub className="text-black-500 text-7xl" />,
    level: "Intermediate",
  },
  {
    name: "Netlify",
    icon: <SiNetlify className="text-gray-500 text-7xl" />,
    level: "Intermediate",
  },
  {
    name: "Threejs",
    icon: <TbBrandThreejs className="text-7xl" />,
    level: "Beginner",
  },
  {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion className="text-gray-600 text-7xl" />,
    level: "Beginner",
  },
];

const Skills = () => {
  return (
    <div className="text-2xl bg-black rounded-[50px] ">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center items-center py-5 text-gray-500 text-4xl font-bold"
      >
        My skills
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 py-10 place-items-center px-20 text-center gap-8">
        {icons.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className=" text-white hover:shadow-xs w-xs shadow-gray-400 flex flex-col gap-5 items-center justify-center rounded-2xl h-[150px] p-2 bg-[#0f0f0f] "
          >
            <div>{skill.icon}</div>
            <h2 className="font-semibold text-red-300 bottom-0">
              {skill.name}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
  