import "../../../styles/technologies.css";

// React Router
import { Outlet } from "react-router";

const Technologies = () => {
  return (
    <div className="technology-background">
      <Outlet/>
    </div>
  )
};

export default Technologies