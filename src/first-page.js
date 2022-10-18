import { useState } from "react";
import "./first-page.css";
import About from "./components/about";
import Welcome from "./welcome";

const FirstPage = (props) => {
  const [showAbout, eventHandler] = useState(false);

  return (
    <>
      <div className="container">
        {!showAbout && <Welcome pageNo={props.setPageNumber} />}
        {showAbout && <About />}
        <div className="about-button-wrapper">
          <button className="about-button" onClick={() => eventHandler(!showAbout)}>About</button>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
