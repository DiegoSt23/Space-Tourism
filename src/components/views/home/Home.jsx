import "../../../styles/home.css";

// React Router
import { Link } from "react-router-dom";

// Framer Motion
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home">
        <motion.section 
          className="info-container"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "just", duration: 0.5}}
        >
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p className="text-home">
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </motion.section>
        <div className="info-container-2">
          <section className="explore-container">
            <Link to="/destination" className="link">
              <h2>EXPLORE</h2>
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
};

export default Home