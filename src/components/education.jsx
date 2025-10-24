import { motion } from "framer-motion";
import { Element } from "react-scroll";
import payamenoor from "../assets/education/payamenoor.jpg";
import farhangian from "../assets/education/farhangian.jpg";

export const Education = () => {
  return (
    <Element name={"education"}>
      <section className="mx-60 flex flex-col justify-baseline items-center gap-10 py-30 px-10 max-xl:mx-0 max-xl:py-20 max-sm:py-20 max-sm:mx-0 max-sm:gap-6">
        <h1 className="text-blue-500 font-semibold max-sm:text-sm">
          Education
        </h1>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-start gap-8 max-md:p-7"
        >
          <div className="flex flex-row justify-start items-center gap-3">
            <div className="w-[80px]">
              <img src={payamenoor} />
            </div>
            <div className="">
              <p className="max-md:text-xs font-[tahoma]">BSc in Computer Engineering at Payamenoor University - Iran</p>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center gap-3">
            <div className="w-[80px]">
              <img src={farhangian} />
            </div>
            <div className="">
              <p className="max-md:text-xs font-[tahoma]">BSc in Educational Sciences at Farhangian University - Iran</p>
            </div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};
