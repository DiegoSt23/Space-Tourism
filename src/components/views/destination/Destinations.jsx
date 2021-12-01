import "../../../styles/destinations.css";

// React Router
import { Outlet } from "react-router";

const Destinations = () => {  
  return (
    <div className="destination-background">
      <Outlet/>
    </div>
  );
};

export default Destinations;
