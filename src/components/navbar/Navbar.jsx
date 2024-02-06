import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to my portfolio!
        </motion.span>
        <motion.div variants={textVariants} className="buttons">
          <motion.button variants={textVariants}>
            <a href={`#Projects`}>See the Latest Projects</a>
          </motion.button>
          <motion.button variants={textVariants}>
            <a href={`#Contact`}>Contact Me</a>
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a className="socialItem" href="https://www.facebook.com/kRaViDaO/">
            <img src="/facebook.png" alt="" />
          </a>
          <a className="socialItem" href="https://www.instagram.com/kravidao/">
            <img src="/instagram.png" alt="" />
          </a>
          <a
            className="socialItem"
            href="https://www.youtube.com/@joaocravidao259"
          >
            <img src="/youtube.png" alt="" />
          </a>
          <a className="socialItem" href="https://github.com/joaocravidao">
            <img src="/github.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
