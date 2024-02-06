"use client";
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { ServicesSlick } from "../component/data";
import { IoIosArrowRoundForward } from "react-icons/io";

function ServicesPage() {
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
            My Services<span className="text-colorThree font-semibold">.</span>
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
          <div>
            <Slider {...settings}>
              {ServicesSlick.map((items) => (
                <div
                  key={items.icon}
                  className="rounded-md group cursor-pointer py-3 px-5 bg-[#2c2053]"
                >
                  <div className="text-3xl md:text-4xl text-colorThree">
                    {items.icon}
                  </div>
                  <div className="my-3 text-1xl md:text-2xl font-semibold">
                    {items.title}
                  </div>
                  <div className="mb-5 opacity-75 w-2/3">{items.para}</div>
                  <div className="text-3xl md:text-4xl">
                    <IoIosArrowRoundForward className="-rotate-[45deg] group-hover:rotate-0 group-hover:text-colorThree duration-300" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ServicesPage;
