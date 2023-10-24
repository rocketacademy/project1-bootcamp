//React Components
import React from "react";
import OurNav from "./Components/OurNav.js";
import About from "./Components/About.js";
import ImgDivider from "./Components/ImgDivider.js";

//Images
import backgroundWide1 from "./images/backgroundWide1.jpg";
import brulePork from "./images/brule-pork-belly.jpg";
import placeholder from "./images/placeholder.jpg";

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

  moveTo = (id) => {
    document.querySelector(`#${id}`).scrollIntoView();
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
          >
            <div className="col-lg-5 col-sm-12 welcome-msg">
              <h2>Welcome to the Supper Place!</h2>
              <p className="welcome-msg-text">
                Kok and Celina have been cooking up delicious fusion quisine
                since 2009 at Celina's Gastrobar along Duxton Road
              </p>
              <p className="welcome-msg-text">
                After it's closure in 2009, Kok and Celina's love for food could
                not be quelled and returned in the form of Intimate Suppers in
                2017
              </p>
              <p className="welcome-msg-text">
                Since then, every menu has been crafted with a love for food and
                a passion to create. So come and enjoy our creations together
                with us today!
              </p>
              <button
                className="btn btn-dark"
                onClick={() => this.moveTo("curr-menu")}
              >
                Our current menu
              </button>
            </div>
          </div>
        </div>
        <div className="row" id="about">
          <About />
          <ImgDivider img={brulePork} />
        </div>
        <div className="row" id="curr-menu">
          <div className="test col-lg-6 col-sm-12 d-lg-none">
            <h1>Our Current Menu</h1>
          </div>
          <ImgDivider img={placeholder} />
          <div className="test col-lg-6 col-sm-12 d-lg-block d-none">
            <h1>Our Current Menu</h1>
          </div>
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
