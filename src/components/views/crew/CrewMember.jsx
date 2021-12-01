// Components
import CrewNavBar from "./CrewNavBar";

// Framer Motion
import { motion } from "framer-motion";

const CrewMember = ({ data }) => {
  return (
    <>
      <div className="title-container">
        <h3 className="num">02</h3>
        <h3 className="title">MEET YOUR CREW</h3>
      </div>
      <div className="crew">
        <section className="crew-sub-container">
          <div className="member-info-container">
            <h2 className="position">{data.position}</h2>
            <h1 className="crew-member">{data.name}</h1>
            <p className="member-description">{data.description}</p>
          </div>          
          <CrewNavBar/>
        </section>
        <section className="crew-sub-container-2">
          <motion.img 
            src={data.image} 
            alt={data.name} 
            className="member-image"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "just", duration: 0.5}}
          />
        </section>
      </div>
    </>
  );
};

export default CrewMember;
