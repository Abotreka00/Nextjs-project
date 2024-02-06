"use client";
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import webImage1 from "../assest/webImage1.jpg";
import webImage2 from "../assest/webImage2.png";
import webImage3 from "../assest/webImage3.png";
import webImage4 from "../assest/webImage4.png";
import { HiOutlineArrowSmRight } from "react-icons/hi";

function WorkPage() {
  const WorkSlick = [
    { image: webImage1, alt: "1" },
    { image: webImage2, alt: "2" },
    { image: webImage3, alt: "3" },
    { image: webImage4, alt: "4" },
  ];
  const settings = {
    dots: true,
    speed: 500,
    Infinity: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="relative parent w-full text-white px-5 md:px-32 flex pt-[70px] md:pt-[200px] flex-col gap-5 md:flex-row">
        <motion.div
          className="absolute top-0 z-[1000] left-0 w-0 h-screen"
          initial={{ backgroundColor: "#1d1539", width: "100%" }}
          whileInView={{ backgroundColor: "#1d1539", width: "0%" }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute top-0 z-[900] left-0 w-full h-screen"
          initial={{ backgroundColor: "#28195a", width: "100%" }}
          whileInView={{ backgroundColor: "#28195a", width: "0%" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute top-0 z-[800] left-0 w-full h-screen"
          initial={{ backgroundColor: "#352470", width: "100%" }}
          whileInView={{ backgroundColor: "#352470", width: "0%" }}
          transition={{ delay: 0.4, duration: 0.5 }}
        ></motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-[40%] h-fit"
        >
          <h3 className="text-3xl md:text-5xl mb-5">
            My Work<span className="text-colorThree font-semibold">.</span>
          </h3>
          <p className="text-[14px] opacity-60 mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit,
            quas accusamus corporis, officiis aliquid natus, molestias itaque at
            aut eos necessitatibus consequatur adipisci dolore quia repellendus
            quisquam architecto mollitia.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative child w-full md:w-[60%] text-white -translate-x-1/2"
        >
          <Slider {...settings}>
            {WorkSlick.map((items) => (
              <div
                key={items.alt}
                className="min-h-[255px] overflow-hidden relative group cursor-pointer"
              >
                <Image
                  src={items.image}
                  alt={items.alt}
                  className="w-full max-h-[255px] min-h-[255px] pointer-events-none"
                />
                <div className="absolute flex items-center justify-center gap-3 bottom-0 left-0 w-full h-full opacity-0 group-hover:opacity-80 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd85] transition-all duration-700 z-30 font-semibold">
                  <span className="translate-y-40 group-hover:translate-y-0">
                    Live
                  </span>
                  <span className="translate-y-40 group-hover:translate-y-0 duration-300">
                    Project
                  </span>
                  <span className="translate-y-40 group-hover:translate-y-0 duration-500 text-3xl">
                    <HiOutlineArrowSmRight />
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </>
  );
}

export default WorkPage;
