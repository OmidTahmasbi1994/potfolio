import { motion } from "framer-motion";
import { Element } from "react-scroll";
import html from "../assets/courses/html.png";
import css from "../assets/courses/css.png";
import javascript from "../assets/courses/javaScript.png";
import reactjs from "../assets/courses/reactjs.png";
import reacthooks from "../assets/courses/reacthooks.png";
import typescript from "../assets/courses/typescript.png";
import tailwind from "../assets/courses/tailwind.png";
import redux from "../assets/courses/redux.png";
import framermotion from "../assets/courses/framermotion.png";
import git from "../assets/courses/git.png";

export const Skills = () => {
  return (
    <Element name={"skills"}>
      <section className="mx-60 flex flex-col justify-baseline items-center gap-10 py-30 px-10 max-xl:mx-0 max-xl:py-20 max-sm:py-20 max-sm:mx-0 max-sm:gap-6">
        <h1 className="text-blue-500 font-semibold max-sm:text-sm">
          Skills and Certificates
        </h1>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="md:flex md:flex-row md:justify-around md:flex-wrap min-md:gap-5 min-md:p-7 max-md:grid max-md:grid-cols-4 max-md:gap-2 max-md:p-7"
        >
          <div className="md:w-[15%] bg-gray-50 border-solid border-1 border-gray-300 rounded-md shadow-lg shadow-gray-300 flex flex-col justify-start md:justify-center align-center gap-2">
            <div className="max-md:h-[55%] p-2">
              <img src={html} className="w-full h-full rounded-2xl" />
            </div>
            <div>
              <p className="p-3 text-center text-xs font-semibold">HTML</p>
            </div>
          </div>

          <div className="md:w-[15%] bg-gray-50 border-solid border-1 border-gray-300 rounded-md shadow-lg shadow-gray-300 flex flex-col justify-start md:justify-center align-center">
            <div className="max-md:h-[55%] p-2">
              <img src={css} className="w-full h-full rounded-2xl" />
            </div>
            <div>
              <p className="p-3 text-center text-xs font-semibold">CSS</p>
            </div>
          </div>

          <div className="md:w-[15%] bg-gray-50 border-solid border-1 border-gray-300 rounded-md shadow-lg shadow-gray-300 flex flex-col justify-start md:justify-center align-center">
            <div className="h-[55%] p-2">
              <img src={javascript} className="w-full h-full rounded-2xl" />
            </div>
            <div>
              <p className="p-3 text-center text-xs font-semibold">JavaScript</p>
            </div>
          </div>

          <div className="md:w-[15%] bg-gray-50 border-solid border-1 border-gray-300 rounded-md shadow-lg shadow-gray-300 flex flex-col justify-start md:justify-center align-center">
            <div className="max-md:h-[50%] p-2">
              <img src={reactjs} className="w-full h-full rounded-2xl" />
            </div>
            <div>
              <p className="p-3 text-center text-xs font-semibold">React Js</p>
            </div>
          </div>

          <div className="md:w-[15%] bg-gray-50 border-solid border-1 border-gray-300 rounded-md shadow-lg shadow-gray-300 flex flex-col justify-start md:justify-center align-center">
            <div className="max-md:h-[55%] p-2">
              <img src={typescript} className="w-full h-full rounded-2xl" />
            </div>
            <div>
              <p className="p-3 text-center text-xs font-semibold">TypeScript</p>
            </div>
          </div>

          <div className="md:w-[15%] bg-gray-50 border-solid border-1 border-gray-300 rounded-md shadow-lg shadow-gray-300 flex flex-col justify-start md:justify-center align-center">
            <div className="max-md:h-[55%] p-2">
              <img src={tailwind} className="w-full h-full rounded-2xl" />
            </div>
            <div>
              <p className="p-3 text-center text-xs font-semibold">Tailwindcss</p>
            </div>
          </div>

          <div className="md:w-[15%] bg-gray-50 border-solid border-1 border-gray-300 rounded-md shadow-lg shadow-gray-300 flex flex-col justify-start md:justify-center align-center">
            <div className="max-md:h-[55%] p-2">
              <img src={redux} className="w-full h-full rounded-2xl" />
            </div>
            <div>
              <p className="p-3 text-center text-xs font-semibold">Redux</p>
            </div>
          </div>

          <div className="md:w-[15%] bg-gray-50 border-solid border-1 border-gray-300 rounded-md shadow-lg shadow-gray-300 flex flex-col justify-start md:justify-center align-center">
            <div className="max-md:h-[55%] p-2">
              <img src={reacthooks} className="w-full h-full rounded-2xl" />
            </div>
            <div>
              <p className="p-3 text-center text-xs font-semibold">React Hooks</p>
            </div>
          </div>

          <div className="md:w-[15%] bg-gray-50 border-solid border-1 border-gray-300 rounded-md shadow-lg shadow-gray-300 flex flex-col justify-start md:justify-center align-center">
            <div className="max-md:h-[55%] p-2">
              <img src={framermotion} className="w-full h-full rounded-2xl" />
            </div>
            <div>
              <p className="p-3 text-center text-xs font-semibold">react Animation</p>
            </div>
          </div>

          <div className="md:w-[15%] bg-gray-50 border-solid border-1 border-gray-300 rounded-md shadow-lg shadow-gray-300 flex flex-col justify-start md:justify-center align-center">
            <div className="max-md:h-[55%] p-2">
              <img src={git} className="w-full h-full rounded-2xl" />
            </div>
            <div>
              <p className="p-3 text-center text-xs font-semibold">Git</p>
            </div>
          </div>

        </motion.div>
      </section>
    </Element>
  );
};
