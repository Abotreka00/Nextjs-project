"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import avatar1 from "../assest/avater1.png";
import avatar2 from "../assest/avater2.png";
import avatar3 from "../assest/avater3.png";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
function TestimoniasPage() {
  const SliderRef = useRef(null);
  const WorkSlick = [
    {
      avatar: avatar1,
      id: "1",
      title: "Better Luis",
      devolop: "NodeJs Developer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos cumque. Ducimus at velit natus nulla sit. Id, veniam laboriosam.",
    },
    {
      avatar: avatar2,
      id: "1",
      title: "Olivia Jack",
      devolop: "JavaScript Developer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos cumque. Ducimus at velit natus nulla sit. Id, veniam laboriosam.",
    },
    {
      avatar: avatar3,
      id: "1",
      title: "Luna Luis",
      devolop: "ReactJs Developer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos cumque. Ducimus at velit natus nulla sit. Id, veniam laboriosam.",
    },
  ];
  const settings = {
    dots: true,
    speed: 500,
    Infinity: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleClickLeft = () => {
    SliderRef.current.slickNext();
  };
  const handleClickRight = () => {
    SliderRef.current.slickPrev();
  };
  return (
    <>
      <div className="relative w-full gap-10 text-white px-5 md:px-40 flex pt-[70px] md:pt-[200px] flex-col">
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
          className="w-full text-center"
        >
          <h3 className="text-3xl md:text-5xl mb-5">
            What CLients
            <span className="text-colorThree font-semibold"> say</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-full text-white"
        >
          <div
            onClick={() => {
              handleClickLeft();
            }}
            className="text-4xl cursor-pointer absolute left-0 z-50 md:-left-10 top-1/2 text-colorThree -translate-y-1/2"
          >
            <FaChevronLeft />
          </div>
          <Slider ref={SliderRef} {...settings}>
            {WorkSlick.map((items) => (
              <div className="flexbox w-full gap-10" key={items.id}>
                <div className="flex flex-col justify-center w-[20%]">
                  <Image
                    src={items.avatar}
                    alt={items.id}
                    className="w-20 rounded-full mx-auto"
                  />
                  <div className="mt-5 text-center">
                    <h4 className="text-[15px] font-bold whitespace-nowrap">
                      {items.title}
                    </h4>
                    <h4 className="text-[10px] mt-1 text-center">
                      {items.devolop}
                    </h4>
                  </div>
                </div>
                <div>
                  <FaQuoteLeft className="text-5xl opacity-60 mb-3" />
                  <p>{items.para}</p>
                </div>
              </div>
            ))}
          </Slider>
          <div
            onClick={() => {
              handleClickRight();
            }}
            className="text-4xl cursor-pointer absolute right-0 md:-right-10 text-colorThree top-1/2 -translate-y-1/2"
          >
            <FaChevronRight />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default TestimoniasPage;
