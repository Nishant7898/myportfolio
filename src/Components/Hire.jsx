import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const Hire = () => {
  return (
    <div className="fixed top-0 right-0 w-full flex justify-end p-2 md:p-10 lg:p-20 z-10">
      <button className="bg-black flex gap-2 items-center sm:border border-2 rounded-full  sm:text-xs hover:bg-gray-600 font-lexend-exa text-white py-3 px-1 sm:py-4 sm:px-2">
        Hire Me!
        <CiMenuKebab className="text-lg sm:text-xl" />
      </button>
    </div>
  );
};

export default Hire;
