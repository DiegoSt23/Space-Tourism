import "../../styles/navBar.css";
import { useState } from "react";
import logo from "../../assets/shared/logo.svg";
import menuHamburguer from "../../assets/shared/icon-hamburger.svg";

// React Router
import { NavLink } from "react-router-dom";

// Components
import ResponsiveMenu from "./ResponsiveMenu";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const handleModalOpen = () => {
    modalOpen ? close() : open();
  };

  return (
    <header className="nav-bar">
      <section className="logo-container">
        <img src={logo} alt="logo" />
      </section>
      <section className="nav-bar-background">
        <div className="line-container">
          <div className="line"></div>
        </div>
        <div className="menu-logo-container">
          <img src={menuHamburguer} alt="menu" onClick={handleModalOpen} />
        </div>
        <div className="nav-bar-container">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "option")}
            to="/"
          >
            <p>00</p>
            <p className="text">HOME</p>
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "option")}
            to="/destination"
          >
            <>01</>
            <p className="text">DESTINATION</p>
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "option")}
            to="/crew"
          >
            <p>02</p>
            <p className="text">CREW</p>
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "option")}
            to="/technology"
          >
            <p>03</p>
            <p className="text">TECHNOLOGY</p>
          </NavLink>
        </div>
      </section>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <ResponsiveMenu modalOpen={modalOpen} handleClose={close} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;