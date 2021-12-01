import moon from "./image-moon.png";
import mars from "./image-mars.png";
import europa from "./image-europa.png";
import titan from "./image-titan.png";

const moonData = {
  name: "MOON",
  image: moon,
  description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  distance: "225,000",
  travelTime: "3 DAYS"
};

const marsData = {
  name: "MARS",
  image: mars,
  description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  distance: "384,400",
  travelTime: "9 MONTHS"
};

const europaData = {
  name: "EUROPA",
  image: europa,
  description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  distance: "628,000",
  travelTime: "3 YEARS"
};

const titanData = {
  name: "TITAN",
  image: titan,
  description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  distance: "1.6 BIL.",
  travelTime: "7 YEARS"
};

export {moonData, marsData, europaData, titanData}