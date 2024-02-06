"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
function Aboutpage() {
  const [buttonActive, setButtonActive] = useState("tab1");
  const handleButtonClick = (value) => {
    if (value === buttonActive) {
      return;
    }
    setButtonActive(value);
  };
  return (
    <>
      <div className="relative w-full text-white px-5 md:px-32 flex pt-[40px] md:pt-[200px] flex-col md:flex-row gap-10">
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
          className="w-full md:w-1/2"
        >
          <h3 className="text-3xl md:text-5xl mb-5">
            Captivating <span className="text-colorThree">stories</span> birth
            magnificent design.
          </h3>
          <p className="text-[14px] opacity-60 mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit,
            quas accusamus corporis, officiis aliquid natus, molestias itaque at
            aut eos necessitatibus consequatur adipisci dolore quia repellendus
            quisquam architecto mollitia.
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-5">
            <div className="flex flex-col items-center text-[13px] text-white">
              <span className="text-colorThree mb-2 text-2xl font-semibold">
                <CountUp start={0} end={10} delay={1} duration={2} prefix="+" />
              </span>
              Lorem, ipsum.
            </div>
            <div className="flex flex-col items-center text-[13px] text-white">
              <span className="text-colorThree mb-2 text-2xl font-semibold">
                <CountUp
                  start={0}
                  end={285}
                  delay={1}
                  duration={2}
                  prefix="+"
                />
              </span>
              Lorem, ipsum.
            </div>
            <div className="flex flex-col items-center text-[13px] text-white">
              <span className="text-colorThree mb-2 text-2xl font-semibold">
                <CountUp
                  start={0}
                  end={434}
                  delay={1}
                  duration={2}
                  prefix="+"
                />
              </span>
              Lorem, ipsum.
            </div>
            <div className="flex flex-col items-center text-[13px] text-white">
              <span className="text-colorThree mb-2 text-2xl font-semibold">
                <CountUp start={0} end={6} delay={1} duration={2} prefix="+" />
              </span>
              Lorem, ipsum.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2"
        >
          <div className="mb-10">
            <div className="mb-3">
              <TETabs pills className="skills">
                <TETabsItem
                  onClick={() => handleButtonClick("tab1")}
                  active={buttonActive === "tab1"}
                  tag="button"
                >
                  Skils
                </TETabsItem>
                <TETabsItem
                  onClick={() => handleButtonClick("tab2")}
                  active={buttonActive === "tab2"}
                  tag="button"
                >
                  Awards
                </TETabsItem>
                <TETabsItem
                  onClick={() => handleButtonClick("tab3")}
                  active={buttonActive === "tab3"}
                  tag="button"
                >
                  Experience
                </TETabsItem>
                <TETabsItem
                  onClick={() => handleButtonClick("tab4")}
                  active={buttonActive === "tab4"}
                  tag="button"
                >
                  Credentails
                </TETabsItem>
              </TETabs>

              <TETabsContent>
                <TETabsPane show={buttonActive === "tab1"}>
                  <div className="flex gap-5 items-center">
                    <span className="opacity-60">web Development = </span>
                    <span>
                      <FaCss3 />
                    </span>
                    <span>
                      <FaHtml5 />
                    </span>
                    <span>
                      <FaJava />
                    </span>
                    <span>
                      <FaReact />
                    </span>
                    <span>
                      <FaBootstrap />
                    </span>
                  </div>
                </TETabsPane>
                <TETabsPane show={buttonActive === "tab2"}>
                  <div className="flex gap-5 items-center">
                    <span className="opacity-60">Lorem, ipsum. = </span>
                    <span>
                      <FaCss3 />
                    </span>
                    <span>
                      <FaHtml5 />
                    </span>
                    <span>
                      <FaJava />
                    </span>
                    <span>
                      <FaReact />
                    </span>
                    <span>
                      <FaBootstrap />
                    </span>
                  </div>
                </TETabsPane>
                <TETabsPane show={buttonActive === "tab3"}>
                  <div className="flex gap-5 items-center">
                    <span className="opacity-60">
                      Lorem ipsum dolor sit. ={" "}
                    </span>
                    <span>
                      <FaCss3 />
                    </span>
                    <span>
                      <FaHtml5 />
                    </span>
                    <span>
                      <FaJava />
                    </span>
                    <span>
                      <FaReact />
                    </span>
                    <span>
                      <FaBootstrap />
                    </span>
                  </div>
                </TETabsPane>
                <TETabsPane show={buttonActive === "tab4"}>
                  <div className="flex gap-5 items-center">
                    <span className="opacity-60">web Development = </span>
                    <span>
                      <FaCss3 />
                    </span>
                    <span>
                      <FaHtml5 />
                    </span>
                    <span>
                      <FaJava />
                    </span>
                    <span>
                      <FaReact />
                    </span>
                    <span>
                      <FaBootstrap />
                    </span>
                  </div>
                </TETabsPane>
              </TETabsContent>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Aboutpage;
