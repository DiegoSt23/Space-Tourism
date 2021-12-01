import "../../../styles/crew.css";

// React Router
import { Outlet } from "react-router";

const Crew = () => {
  return (
    <div className="crew-background">
      <Outlet/>
    </div>
  )
};

export default Crew