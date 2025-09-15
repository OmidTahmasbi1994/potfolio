import { motion } from "framer-motion";
import profileImage from "../assets/profileImage.jpg";
import { Element } from 'react-scroll'

export const About = () => {
  return (
    <Element name={'about_me'}>
      <section className="flex flex-col justify-baseline items-center gap-10 py-30 px-10 max-sm:gap-6">
        <h1 className="text-blue-500 font-semibold">About Me</h1>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-row justify-start items-center border-solid border-1 border-gray-200 rounded-xl shadow-lg shadow-gray-300"
        >
          <img className="w-[40%] rounded-l-xl" src={profileImage} />
          <p className="text-gray-500 text-sm text-justify pl-3">
            Hello :) <br /> my name is Omid Tahmasebi and I'm a fron-end
            developer.
          </p>
        </motion.div>
      </section>
    </Element>
    
  );
};
