import "../css/Hero.css";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faScrewdriverWrench,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section className="hero">
        {/* 🔥 HERO CONTENT */}
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              UNLEASH YOUR <br />
              <span>FITNESS POTENTIAL</span>
            </h1>

            <p>
              Transform your physique with elite trainers <br />
              and state-of-the-art equipment.
            </p>

            <button className="btn">GET STARTED</button>
          </div>
        </div>

        {/* 🔥 FEATURE CARDS (HORIZONTAL) */}
        <div className="features">

          <div className="feature-card">
            <div className="feature-left">
              <FontAwesomeIcon icon={faDumbbell} />
            </div>

            <div className="feature-right">
              <h3>Expert Trainers</h3>
              <p>
                Certified trainers to guide you on your fitness journey.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-left">
              <FontAwesomeIcon icon={faScrewdriverWrench} />
            </div>

            <div className="feature-right">
              <h3>Modern Equipment</h3>
              <p>
                Cutting-edge machines and weights for effective workouts.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-left">
              <FontAwesomeIcon icon={faUserGear} />
            </div>

            <div className="feature-right">
              <h3>Personalized Plans</h3>
              <p>
                Customized training plans to meet your unique goals.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}