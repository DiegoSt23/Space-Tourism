// React Router
import { NavLink } from "react-router-dom";

const DestinationNavBar = () => {
  return (
    <div className="destination-nav-bar">
      <NavLink
        className={(navData) => (navData.isActive ? "destination-active" : "destination-option")}
        to="/destination"
      >
        <p>MOON</p>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "destination-active" : "destination-option")}
        to="/destination/mars"
      >
        <p>MARS</p>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "destination-active" : "destination-option")}
        to="/destination/europa"
      >
        <p>EUROPA</p>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "destination-active" : "destination-option")}
        to="/destination/titan"
      >
        <p>TITAN</p>
      </NavLink>
    </div>
  )
};

export default DestinationNavBar