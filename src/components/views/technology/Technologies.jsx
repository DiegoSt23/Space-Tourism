import "../../../styles/technologies.css";
import { useEffect } from "react";

// React Router
import { Outlet, useNavigate } from "react-router";

const Technologies = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/technology/vehicle");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="technology-background">
      <Outlet/>
    </div>
  )
};

export default Technologies