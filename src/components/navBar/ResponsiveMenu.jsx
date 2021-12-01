import { useEffect } from "react";

// Components
import Backdrop from "./Backdrop";

// React Router
import { NavLink } from "react-router-dom";

// Framer Motion
import { motion } from "framer-motion";

// useWidth
import useWindowDimensions from "../../useWidth/useWidth";

const dropIn = {
  hidden: {
    x: "100vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 35,
      stiffness: 300,
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};

const ResponsiveMenu = ({ handleClose }) => {
  const { width } = useWindowDimensions();
  
  useEffect(() => {
    if (width > 576) {
      handleClose()
    }
  }, [width, handleClose]);

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="hidden-menu"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <section className="hidden-nav-bar">
          <NavLink
            onClick={handleClose}
            className={(navData) => (navData.isActive ? "hidden-active" : "hidden-option")}
            to="/"
          >
            <p>00</p>
            <p className="hidden-text">HOME</p>
          </NavLink>
          <NavLink
            onClick={handleClose}
            className={(navData) => (navData.isActive ? "hidden-active" : "hidden-option")}
            to="/destination"
          >
            <p>01</p>
            <p className="hidden-text">DESTINATION</p>
          </NavLink>
          <NavLink
            onClick={handleClose}
            className={(navData) => (navData.isActive ? "hidden-active" : "hidden-option")}
            to="/crew"
          >
            <p>02</p>
            <p className="hidden-text">CREW</p>
          </NavLink>
          <NavLink
            onClick={handleClose}
            className={(navData) => (navData.isActive ? "hidden-active" : "hidden-option")}
            to="/technology"
          >
            <p>03</p>
            <p className="hidden-text">TECHNOLOGY</p>
          </NavLink>
        </section>
      </motion.div>
    </Backdrop>
  );
};

export default ResponsiveMenu;
