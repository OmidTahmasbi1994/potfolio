import { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export const Navbar = () => {
  const [tog, setTog] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white-75 px-10 py-5 backdrop-blur-sm">
      <div className="flex flex-row justify-between items-center">
        <Link to="/">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className=" max-md:text-2xl font-semibold text-blue-500 capitalize"
          >
            omid tahmasebi
          </motion.h1>
        </Link>
        <div className="max-md:hidden capitalize">
          <Link
            to="/"
            className="text-blue-500 text-md font-semibold ml-5 cursor-pointer"
          >
            home
          </Link>
          <Link
            to="/user"
            className="text-blue-500 text-md font-semibold ml-5 border-solid border-2 border-blue-500 px-3 py-2 rounded-3xl cursor-pointer"
          >
            login
          </Link>
        </div>
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
      {tog && <MobileNav />}
    </nav>
  );
};

export const MobileNav = () => {
  return (
    <motion.div
      initial={{ y:-12 }}
      animate={{ y:0 }}
      transition={{duration:0.3 }}
      className="hidden max-md:block mt-5 bg-white-75 "
    >
      <div className="flex flex-col justify-center items-start px-1 py-4 capitalize">
        <Link
          to="/"
          className="mx-1 my-3 text-blue-500 text-sm font-semibold cursor-pointer"
          onClick={()=>setTog(false)}
        >
          home
        </Link>
        <Link
          to="/user"
          className="my-3 text-blue-500 text-sm font-semibold border-solid border-2 border-blue-500 px-2 py-1 rounded-3xl cursor-pointer"
          onClick={()=>setTog(false)}
        >
          login
        </Link>
      </div>
    </motion.div>
  );
};
