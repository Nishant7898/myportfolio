import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const Button = () => {
  return (
    <div className="w-full fixed justify-end flex items-center p-20 z-10">
      <button className="bg-black gap-2 flex text-center items-center border-4 rounded-full text-xl hover:bg-gray-600    text-white py-4 px-4">
        Hire Me!
        <CiMenuKebab className="text-xl" />
      </button>
    </div>
  );
};

export default Button;
