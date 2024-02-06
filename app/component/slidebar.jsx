"use client";
import React, { useState } from "react";
import { FaHome, FaServicestack, FaUser } from "react-icons/fa";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { FaNoteSticky } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const itemsSlider = [
  { path: "/", title: "Home", icon: <FaHome /> },
  { path: "/about", title: "About", icon: <FaUser /> },
  { path: "/services", title: "Services", icon: <FaServicestack /> },
  { path: "/work", title: "Work", icon: <LiaNetworkWiredSolid /> },
  { path: "/testimonias", title: "Testimonias", icon: <FaNoteSticky /> },
  { path: "/contact", title: "Contact", icon: <MdContactSupport /> },
];

function Slidbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="bg-[#353050] flex flex-row md:flex-col w-full py-5 px-3 gap-5 text-white opacity-80 md:rounded-full justify-evenly">
      {itemsSlider.map((items) => (
        <Link
          key={items.title}
          href={items.path}
          className={`group ${
            pathname === items.path ? "text-colorThree" : "text-white"
          } relative`}
        >
          <div className="relative before:hidden group-hover:before:block before:absolute before:w-2 before:h-2 before:-top-[25px] md:before:top-1/2 before:left-1/2 before:-translate-x-1/2 md:before:-translate-x-0 md:before:left-[35px] before:-translate-y-1/2 before:border-[5px] before:border-t-white before:border-l-transparent md:before:border-t-transparent md:before:border-r-white before:border-b-transparent before:border-r-transparent cursor-pointer hover:text-colorThree duration-300">
            {items.icon}
          </div>
          <div className="hidden group-hover:block absolute -top-10 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-[44px] md:top-1/2 rounded-md -translate-y-1/2 bg-white text-black px-3 text-[15px] font-semibold">
            {items.title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Slidbar;
