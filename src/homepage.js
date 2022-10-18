import { useState } from "react";
import "./App.css";
import About from "./components/about";
import Welcome from "./homepage-welcome";

const FirstPage = (props) => {
  const [showAbout, eventHandler] = useState(false);

  return (
    <>
      <div className="homepage-section" id="container">
        {!showAbout && <Welcome pageNo={props.setPageNumber} />}
        {showAbout && <About />}
        <div className="about-button-wrapper">
          <button
            className="about-button"
            onClick={() => eventHandler(!showAbout)}
          >
            about
          </button>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
