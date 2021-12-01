import "../../../styles/crew.css";
import { useEffect } from "react";

// React Router
import { Outlet, useNavigate } from "react-router";

const Crew = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/crew/commander");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="crew-background">
      <Outlet/>
    </div>
  )
};

export default Crew