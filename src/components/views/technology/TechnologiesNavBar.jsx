// React Router
import { NavLink } from "react-router-dom";

const TechnologiesNavBar = () => {
  return (
    <div className="technologies-nav-bar">
      <NavLink
        className={(navData) => (navData.isActive ? "technology-active" : "technology-option")}
        to="/technology"
      >
        <p>1</p>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "technology-active" : "technology-option")}
        to="/technology/spaceport"
      >
        <p>2</p>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "technology-active" : "technology-option")}
        to="/technology/capsule"
      >
        <p>3</p>
      </NavLink>
    </div>
  )
};

export default TechnologiesNavBar