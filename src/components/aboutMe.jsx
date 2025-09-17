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
          className="flex flex-row justify-start items-center border-solid border-1 border-gray-200 rounded-lg shadow-lg shadow-gray-300 max-xl:items-center max-lg:items-center max-md:items-start max-sm:items-start"
        >
          <img
            className="w-[25%] rounded-lg ml-5 my-5 max-sm:w-[20%] max-sm:mt-3 max-sm:ml-2"
            src={profileImage}
          />
          <p className="text-gray-500 text-sm text-left pl-10 pr-10 py-7 leading-7 max-sm:pl-4 max-sm:pr-4 max-sm:pt-4 max-sm:pb-5 max-sm:text-xs max-sm:leading-6">
            The world around us constantly confronts us with various events. An
            endless variety of bitter and sweet events. My belief and faith is
            that each of these big and small events is accompanied by a code, a
            symbol or a message. Messages and ideas that consistently remind us
            of the beauty of the universe. The stars that are shining, the moon
            that gives light and the earth that gives life. Years ago, when this
            idea was formed in me, I decided to step into the world of codes and
            messages.
            <span className="block mt-5 text-sm max-sm:mt-3 max-sm:text-xs font-semibold">
              Now I am a programmer and eager to learn and create.
            </span>
          </p>
        </motion.div>
      </section>
    </Element>
  );
};
