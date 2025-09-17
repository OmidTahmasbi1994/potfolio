import { motion } from "framer-motion";
import profileImage from "../assets/profileImage.jpg";
import { Element } from "react-scroll";

export const About = () => {
  return (
    <Element name={"about_me"}>
      <section className="mx-60 flex flex-col justify-baseline items-center gap-10 py-30 px-10 max-xl:mx-0 max-xl:py-20 max-sm:py-20 max-sm:mx-0 max-sm:gap-6">
        <h1 className="text-blue-500 font-semibold max-sm:text-sm">About Me</h1>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className=" border-solid border-1 border-gray-200 rounded-2xl shadow-lg shadow-gray-300 min-md:flex min-md:justify-start min-md:items-center min-md:p-7"
        >
          <div className="max-md:w-[20%] max-md:rounded-[100%] max-md:border-solid max-md:border-2 max-md:border-gray-400 max-md:float-left max-md:mt-4 max-md:ml-4 max-md:mr-3">
            <img
              className="max-md:rounded-[100%] min-md:rounded-2xl"
              src={profileImage}
            />
          </div>

          <p className="text-gray-500 text-sm text-left leading-8 max-md:text-xs max-md:mx-8 max-md:pb-8 max-md:pt-5 max-md:leading-6 min-md:p-7">
            The world around us constantly confronts us with various events. An
            endless variety of bitter and sweet events. My belief and faith is
            that each of these big and small events is accompanied by a code, a
            symbol or a message. Messages and ideas that consistently remind us
            of the beauty of the universe. The stars that are shining, the moon
            that gives light and the earth that gives life. Years ago, when this
            idea was formed in me, I decided to step into the world of codes and
            messages.
            <p className="font-semibold max-md:text-xs min-md:mt-5 max-md:mt-4">
              Now I'm a programmer, An eager to learn and create . . .
            </p>
          </p>
        </motion.div>
      </section>
    </Element>
  );
};
