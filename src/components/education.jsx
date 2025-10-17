import { motion } from "framer-motion";
import { Element } from "react-scroll";

export const Education = () => {
  return (
    <Element name={"education"}>
      <section className="mx-60 flex flex-col justify-baseline items-center gap-10 py-30 px-10 max-xl:mx-0 max-xl:py-20 max-sm:py-20 max-sm:mx-0 max-sm:gap-6">
        <h1 className="text-blue-500 font-semibold max-sm:text-sm">Education</h1>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className=" border-solid border-1 border-gray-200 rounded-2xl shadow-lg shadow-gray-300 min-md:flex min-md:justify-start min-md:items-center min-md:p-7"
        >
            <div className="flex flex-row justify-center items-center">
                <div></div>
                <div></div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div></div>
                <div></div>
            </div>
        </motion.div>
      </section>
    </Element>
  );
};