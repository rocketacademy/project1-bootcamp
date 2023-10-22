//React Components
import React from "react";
import OurNav from "./Components/OurNav.js";

//Images
import teleQR from "./images/teleQR.jpg";
import backgroundWide1 from "./images/backgroundWide1.jpg";
import brulePork from "./images/brule-pork-belly.jpg";

//CSS
import "./App.css";

class App extends React.Component {
  componentDidMount = () => {
    // get id from URL
    if (window.location.href.includes("#")) {
      const urlList = window.location.href.split("#");
      const id = urlList[urlList.length - 1];

      document.querySelector(`#${id}`).scrollIntoView();
    }
  };

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <OurNav />
        </div>
        <div className="row">
          <div
            className="col-12 welcome"
            style={{
              backgroundImage: `url(${backgroundWide1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="row" id="about">
          <div className="col-lg-6">
            <h2>About Us</h2>
            <p>
              Intimate suppers celebrates the world of fine dining in a cozy
              home environment. Join us at our hideout for a gastronomical
              experience you will never forget.
            </p>
            <a href="https://t.me/+51G0to4dOdM4YTBl">
              <img
                className="col-lg-5 col-sm-4 col-4"
                src={teleQR}
                href="https://t.me/+51G0to4dOdM4YTBl"
                alt="QR code to join Telegram channel"
              />
            </a>
            <p>Click me to get the latest updates</p>
          </div>
          <div
            className="col-lg-6 section-img"
            style={{
              backgroundImage: `url(${brulePork})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div id="curr-menu">
          <h1>Current Menu</h1>
        </div>
        <div id="faq">
          <h1>FAQ</h1>
        </div>

        <div id="contact">
          <h1>Contact Us</h1>
        </div>
      </div>
    );
  }
}

export default App;
