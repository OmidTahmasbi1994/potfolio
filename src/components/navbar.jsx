import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [tog, setTog] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white-75 px-10 py-5 backdrop-blur-sm">
      <div className="flex flex-row justify-between items-center">
        <span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl max-xl:text-2xl font-semibold text-blue-500 capitalize"
          >
            omid tahmasebi
          </motion.h1>
        </span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-row justify-center items-center gap-4 capitalize max-md:hidden"
        >
          <Link
            to="about_me"
            smooth={true}
            offset={-40}
            duration={1000}
            delay={100}
            className="text-blue-500 text-sm font-semibold cursor-pointer max-xl:text-xs"
          >
            about me
          </Link>
          <span className="text-blue-500 text-sm font-semibold cursor-pointer max-xl:text-xs">
            skills
          </span>
          <span className="text-blue-500 text-sm font-semibold cursor-pointer max-xl:text-xs">
            education
          </span>
          <span className="text-blue-500 text-sm font-semibold cursor-pointer max-xl:text-xs">
            expriences
          </span>
          <span className="text-blue-500 text-sm font-semibold cursor-pointer max-xl:text-xs">
            reseaches
          </span>
          <span className="text-blue-500 text-sm font-semibold cursor-pointer max-xl:text-xs">
            contact
          </span>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden max-md:block text-blue-500 text-4xl font-bold cursor-pointer"
          onClick={() => setTog(!tog)}
        >
          {tog ? "-" : "+"}
        </motion.span>
      </div>
      {tog && <MobileNav closeFn={setTog} />}
    </nav>
  );
};

export const MobileNav = (props) => {
  return (
    <motion.div
      initial={{ y: -12 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="hidden max-md:block mt-5 bg-white-75 "
    >
      <div className="flex flex-col justify-center items-start px-1 py-4 capitalize">
        <Link
          to="about_me"
          smooth={true}
          offset={-350}
          duration={1500}
          delay={50}
          className="mx-1 my-3 text-blue-500 text-sm font-semibold cursor-pointer"
          onClick={() => props.closeFn(false)}
        >
          about me
        </Link>
        <span
          className="mx-1 my-3 text-blue-500 text-sm font-semibold cursor-pointer"
          onClick={() => props.closeFn(false)}
        >
          skills
        </span>
        <span
          className="mx-1 my-3 text-blue-500 text-sm font-semibold cursor-pointer"
          onClick={() => props.closeFn(false)}
        >
          education
        </span>
        <span
          className="mx-1 my-3 text-blue-500 text-sm font-semibold cursor-pointer"
          onClick={() => props.closeFn(false)}
        >
          experiences
        </span>
        <span
          className="mx-1 my-3 text-blue-500 text-sm font-semibold cursor-pointer"
          onClick={() => props.closeFn(false)}
        >
          researches
        </span>
        <span
          className="mx-1 my-3 text-blue-500 text-sm font-semibold cursor-pointer"
          onClick={() => props.closeFn(false)}
        >
          contact
        </span>
      </div>
    </motion.div>
  );
};
