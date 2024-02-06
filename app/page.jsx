"use client";
import rounedText from "./assest/rounded-text.png";
import avatar from "./assest/avatart.png";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="relative h-[700px] z-[100] flex flex-col md:flex-row w-full mt-20 md:mt-0 items-center px-5 md:px-32">
        <motion.div
          className="absolute top-0 z-[1000] left-0 w-0 h-screen"
          initial={{ backgroundColor: "#1d1539", width: "100%" }}
          animate={{ backgroundColor: "#1d1539", width: "0%" }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute top-0 z-[900] left-0 w-full h-screen"
          initial={{ backgroundColor: "#28195a", width: "100%" }}
          animate={{ backgroundColor: "#28195a", width: "0%" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute top-0 z-[800] left-0 w-full h-screen"
          initial={{ backgroundColor: "#352470", width: "100%" }}
          animate={{ backgroundColor: "#352470", width: "0%" }}
          transition={{ delay: 0.4, duration: 0.5 }}
        ></motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-white w-full md:w-1/2"
        >
          <div className="mb-6 font-semibold">
            <h2 className="text-4xl md:text-5xl mb-3">Transforming ideas</h2>
            <h2 className="text-4xl md:text-5xl">
              into
              <span className="text-colorThree font-semibold">
                Sigital Reality
              </span>
            </h2>
          </div>
          <p className="opacity-50 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            suscipit veritatis inventore, libero nihil laborum.
          </p>
          <div className="relative w-fit">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ rotate: 0 }}
            >
              <Image
                src={rounedText}
                width={100}
                height={100}
                alt="Picture of the author"
                className=""
              />
            </motion.div>
            <div className="absolute hover:translate-x-3 duration-300 z-50 rounded-full group w-full cursor-pointer h-full text-white  flex items-center justify-center top-0 left-0">
              <FaChevronRight className="opacity-60 group-hover:opacity-100" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-full md:w-1/2"
        >
          <Image
            src={avatar}
            alt="exposition"
            className="absolute h-[400px] w-[400px] md:w-full md:h-[600px] mt-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>
      </div>
    </>
  );
}
