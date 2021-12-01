import "../../styles/navBar.css";
import { useState } from "react";
import logo from "../../assets/shared/logo.svg";
import menuHamburguer from "../../assets/shared/icon-hamburger.svg";

// React Router
import { NavLink } from "react-router-dom";

// Components
import ResponsiveMenu from "./ResponsiveMenu";

// Framer Motion
import { AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const handleModalOpen = () => {
    modalOpen ? close() : open();
  };

  return (
    <header className="nav-bar">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-bar-background">
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
            to="/destination/moon"
          >
            <>01</>
            <p className="text">DESTINATION</p>
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "option")}
            to="/crew/commander"
          >
            <p>02</p>
            <p className="text">CREW</p>
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "option")}
            to="/technology/vehicle"
          >
            <p>03</p>
            <p className="text">TECHNOLOGY</p>
          </NavLink>
        </div>
      </div>
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
