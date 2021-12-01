import "../../../styles/destinations.css";
import { useEffect } from "react";

// React Router
import { Outlet, useNavigate } from "react-router";

const Destinations = () => { 
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/destination/moon");
    // eslint-disable-next-line
  }, []);
  
  return (
    <div className="destination-background">
      <Outlet/>
    </div>
  );
};

export default Destinations;
