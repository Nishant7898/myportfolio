import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// --- Import Images ---
import A from "../assets/Projectimage/project1.png";
import B from "../assets/Projectimage/project1a.png";
import C from "../assets/Projectimage/project1b.png";
import D from "../assets/Projectimage/project1c.png";
import E from "../assets/Projectimage/project1d.png";
import F from "../assets/Projectimage/project1f.png";

import G from "../assets/Projectimage/project2a.png";
import H from "../assets/Projectimage/project2b.png";
import I from "../assets/Projectimage/project2d.png";
import J from "../assets/Projectimage/project2e.png";

// ✅ Cube component with images
const Cube = ({ images }) => {
  // make sure exactly 6 textures
  const imgs = [...images];
  while (imgs.length < 6) {
    imgs.push(images[imgs.length % images.length]); // repeat if less
  }

  const textures = useLoader(THREE.TextureLoader, imgs);

  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[4, 4, 4]} />
      {textures.map((tex, i) => (
        <meshStandardMaterial
          key={i}
          attach={`material-${i}`}
          map={tex}
          emissive={"cream"}
          emissiveIntensity={0.05}
        />
      ))}
    </mesh>
  );
};

// --- Projects Data ---
const projects = [
  {
    title: "Cloth E-commerce-store",
    description: "A responsive e-commerce app built with React & Tailwind.",
    tech: ["React", "Tailwind", "Redux", "Stripe"],
    img: [A, B, C, D, E, F], // ✅ full 6 images
  },
  {
    title: "Food-Store",
    description: " Food delivery app with cart & payments.",
    tech: ["React", "Tailwind"],
    img: [G, H, I, J], // ✅ will auto-repeat to 6
  },
  {
    title: "Weather App",
    description: "Fetches real-time weather using OpenWeather API.",
    tech: ["React", "API", "Tailwind"],
    img: [A, B, C], // ✅ reuses until 6 faces filled
  },
];

// --- Main Component ---
const MyProject = () => {
  return (
    <section className="py-20 px-10 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:w-full w-[300px] font-bold items-center font-black-ops-one-regular text-center mb-12"
      >
        {" "}
        My Projects
      </motion.h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Cube Visual */}
            <div className="h-64 w-full">
              <Canvas>
                <ambientLight />
                <directionalLight position={[2, 2, 2]} />
                <Cube images={project.img} />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-iceland font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-400 font-lexend-exa mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx}
                    className="px-3 font-pt-serif-caption-regular py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyProject;
