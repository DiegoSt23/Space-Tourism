import "./styles/main.css";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/navBar/NavBar";
import Home from "./components/views/home/Home";
import Destinations from "./components/views/destination/Destinations";
import Destination from "./components/views/destination/Destination";
import Crew from "./components/views/crew/Crew";
import CrewMember from "./components/views/crew/CrewMember";
import Technologies from "./components/views/technology/Technologies";
import Technology from "./components/views/technology/Technology";
import Error from "./components/views/error/Error";

// Information 
import { moonData, marsData, europaData, titanData } from "./assets/destination/destinationInfo";
import { commander, missionSpecialist, pilot, flightEngineer } from "./assets/crew/crewInfo";
import { vehicle, spaceport, capsule } from "./assets/technology/technologyInfo";

function App() { 
  return (
    <div className="main-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/destination" element={<Destinations/>}>
            <Route path="moon" element={<Destination data={moonData}/>}/>
            <Route path="mars" element={<Destination data={marsData}/>}/>
            <Route path="europa" element={<Destination data={europaData}/>}/>
            <Route path="titan" element={<Destination data={titanData}/>}/>
          </Route>
          <Route path="/crew" element={<Crew/>}>
            <Route path="commander" element={<CrewMember data={commander}/>}/>
            <Route path="missionSpecialist" element={<CrewMember data={missionSpecialist}/>}/>
            <Route path="pilot" element={<CrewMember data={pilot}/>}/>
            <Route path="flightEngineer" element={<CrewMember data={flightEngineer}/>}/>
          </Route>
          <Route path="/technology" element={<Technologies/>}>
            <Route path="vehicle" element={<Technology data={vehicle}/>}/>
            <Route path="spaceport" element={<Technology data={spaceport}/>}/>
            <Route path="capsule" element={<Technology data={capsule}/>}/>
          </Route>
          <Route path="*" element={<Error/>} />
        </Routes>       
      </Router>
    </div>
  );
}

export default App;
