import { useEffect, useState } from "react";

// Components
import TechnologiesNavBar from "./TechnologiesNavBar";

const Technology = ({ data }) => {
  const portraitImage = data.imagePortrait;
  const landscapeImage = data.imageLandscape;
  const [image, setImage] = useState("");
  
  
  useEffect(() => {
    if (window.screen.width > 992) {
      setImage(portraitImage)
    } else {
      setImage(landscapeImage)
    }
  }, [data, landscapeImage, portraitImage]);
  
  return (
    <>
      <div className="title-container">
        <h3 className="num">03</h3>
        <h3 className="title">SPACE LAUNCH 101</h3>
      </div>
      <div className="technology">
        <section className="technology-sub-container"></section>
        <section className="technology-sub-container-2">
          <TechnologiesNavBar/>
          <div className="tech-info-container">
            <p className="terminology">THE TERMINOLOGY...</p>
            <h1 className="tech-name">{data.name}</h1>
            <p className="tech-description">{data.description}</p>
          </div>
        </section>
        <section className="technology-sub-container-3">
          <img src={image} alt={data.name} className="techImage"/>
        </section>
      </div>
    </>
  );
};

export default Technology;
