import "../../styles/navBar.css";
import { useState } from "react";
import logo from "../../assets/shared/logo.svg";
import menuHamburguer from "../../assets/shared/icon-hamburger.svg";
import menuClose from "../../assets/shared/icon-close.svg";

// React Router
import { NavLink, Link } from "react-router-dom";

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
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-bar-background">
        <div className="line-container">
          <div className="line"></div>
        </div>
        <div className="menu-logo-container">
          {modalOpen ? (
            <img src={menuClose} alt="close-menu" onClick={close} />
          ) : (
            <img src={menuHamburguer} alt="open-menu" onClick={handleModalOpen}/>
          )}
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
