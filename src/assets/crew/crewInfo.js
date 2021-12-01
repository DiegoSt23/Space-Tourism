import commanderImage from "./image-douglas-hurley.png";
import missionSpecialistImage from "./image-mark-shuttleworth.png";
import pilotImage from "./image-victor-glover.png";
import flightEngienerImage from "./image-anousheh-ansari.png";

const commander = {
  position: "COMMANDER",
  name: "DOUGLAS HURLEY",
  image: commanderImage,
  description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
};

const missionSpecialist = {
  position: "MISSION SPECIALIST",
  name: "MARK SHUTTLEWORTH",
  image: missionSpecialistImage,
  description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
};

const pilot = {
  position: "PILOT",
  name: "VICTOR GLOVER",
  image: pilotImage,
  description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
};

const flightEngineer = {
  position: "FLIGHT ENGINEER",
  name: "ANOUSHEH ANSARI",
  image: flightEngienerImage,
  description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
};

export { commander, missionSpecialist, pilot, flightEngineer }
