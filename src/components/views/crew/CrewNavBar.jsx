// React Router
import { NavLink } from "react-router-dom";

const CrewNavBar = () => {
  return (
    <div className="crew-nav-bar">
      <NavLink
        className={(navData) => (navData.isActive ? "crew-active" : "crew-option")}
        to="/crew"
      >
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "crew-active" : "crew-option")}
        to="/crew/missionSpecialist"
      >
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "crew-active" : "crew-option")}
        to="/crew/pilot"
      >
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "crew-active" : "crew-option")}
        to="/crew/flightEngineer"
      >
      </NavLink>
    </div>
  )
};

export default CrewNavBar