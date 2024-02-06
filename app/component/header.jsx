"use client";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaInstagramSquare,
} from "react-icons/fa";

function Headerpage() {
  return (
    <div className="w-full px-5 md:px-[100px] py-5 text-white flex items-center justify-between">
      <div className="uppercase md:text-2xl font-semibold">
        Saleh <span className="opacity-70 font-normal">Hossam</span>
      </div>
      <div className="flex item-center gap-5 opacity-85">
        <a
          href="https://www.facebook.com/saleh.hossam.988/"
          className="cursor-pointer hover:text-colorThree duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href=""
          className="cursor-pointer hover:text-colorThree duration-300"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/Abotreka00"
          className="cursor-pointer hover:text-colorThree duration-300"
        >
          <FaGithub />
        </a>
        <a
          href=""
          className="cursor-pointer hover:text-colorThree duration-300"
        >
          <FaInstagramSquare />
        </a>
      </div>
    </div>
  );
}

export default Headerpage;
