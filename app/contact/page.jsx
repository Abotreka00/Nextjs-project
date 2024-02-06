"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function ContactPage() {
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
            Let's
            <span className="text-colorThree font-semibold"> connect.</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-[70%] mx-auto"
        >
          <form className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <input
                className="flex-grow py-2 pl-5 text-1xl text-white outline-none border-[2px] border-colorTwo focus:border-colorThree/50 duration-100 bg-background rounded-lg"
                required
                type="text"
                placeholder="Name"
                name="Name"
              />
              <input
                className="flex-grow py-2 pl-5 text-1xl text-white bg-background rounded-lg border-colorTwo outline-none border-[2px] focus:border-colorThree/50 duration-100"
                required
                type="email"
                placeholder="Email"
                name="Email"
              />
            </div>
            <input
              className="py-2 pl-5 text-1xl text-white bg-background  rounded-lg outline-none border-[2px] border-colorTwo focus:border-colorThree/50 duration-100"
              type="text"
              name="Subject"
              placeholder="Subject"
            />
            <textarea
              name="Message"
              className="py-2 pl-5 resize-none min-h-[130px] bg-background text-1xl rounded-lg outline-none border-[2px] border-colorTwo focus:border-colorThree/50 duration-100"
              placeholder="Message"
            ></textarea>
            <div className="border-[2px] relative group overflow-hidden border-colorTwo py-5 w-[120px] max-h-[40px] px-10 rounded-3xl hover:border-colorThree cursor-pointer duration-300">
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 group-hover:-top-5 -translate-y-1/2 whitespace-nowrap group-hover: transition-all duration-300">
                Let's Talk
              </div>
              <button className="absolute left-1/2 -translate-x-1/2 top-10 group-hover:top-5 group-hover:-translate-y-1/2  whitespace-nowrap group-hover:  transition-all duration-300">
                <FaArrowRight />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default ContactPage;
