// Components
import DestinationNavBar from "./DestinationNavBar";

// Framer Motion
import { motion } from "framer-motion";

const Destination = ({ data }) => {
  return (
    <>
      <title className="title-container">
        <h3 className="num">01</h3>
        <h3 className="title">PICK YOUR DESTINATION</h3>
      </title>
      <div className="destination">
        <section className="destination-sub-container">
          <figure className="image-container">
            <motion.img 
              src={data.image} 
              alt={data.name} 
              className="image" 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "just", duration: 0.5}}
            />
          </figure>
        </section>
        <section className="destination-sub-container-2">
          <DestinationNavBar />
          <h1 className="name">{data.name}</h1>
          <p className="text-destination">{data.description}</p>
          <div className="divider"></div>
          <div className="details-container">
            <div className="details-sub-container">
              <p className="detail-label">AVG. DISTANCE</p>
              <h3 className="detail">{data.distance} KM</h3>
            </div>
            <div className="details-sub-container">
              <p className="detail-label">EST. TRAVEL TIME</p>
              <h3 className="detail">{data.travelTime}</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Destination;
