import { useState } from "react";
import "./App.css";
import About from "./components/about";
import Welcome from "./homepage-welcome";

const HomePage = () => {
  const [showAbout, eventHandler] = useState(false);

  return (
    <>
      <div className="container" id="homepage-section">
        {!showAbout && <Welcome />}
        {showAbout && <About />}
        <div className="about-button-wrapper">
          <button
            className="about-button"
            onClick={() => eventHandler(!showAbout)}
          >
            ABOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
