//React Components
import React from "react";
import OurNav from "./Components/OurNav.js";
import About from "./Components/About.js";
import ImgDivider from "./Components/ImgDivider.js";
import CurrMenu from "./Components/CurrMenu.js";
import { Link } from "react-router-dom";
import FAQ from "./Components/FAQ.js";

//Images
import backgroundWide1 from "./images/backgroundWide1.jpg";
import rendangCrostini from "./images/rendangCrostini.jpg";

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

  currDates = (
    <div className="section-text-container">
      <h1>Our Current Menu</h1>
      <p>
        It's the festive season! checkout our upcoming menu{" "}
        {window.innerWidth < 992 ? "below the dates" : "to the left"}
      </p>
      <h3>Dinner dates:</h3>
      <div className="date-container">
        <div className="date-col">
          <h4>Nov:</h4>
          <p>8 to 11 (Wed to Sat)</p>
          <p>15 to 18 (Wed to Sat)</p>
          <p>22 to 25 (Wed to Sat)</p>
        </div>
        <div className="date-col">
          <h4>Dec:</h4>
          <p>6 to 9 (Wed to Sat)</p>
          <p>13 to 16 (Wed to Sat)</p>
          <p>22 & 23 (Fri & Sat)</p>
          <p>29 & 30 (Fri & Sat)</p>
        </div>
      </div>
      <p>
        $148/pax, BYOB no corkage charges! Reservations in groups of 6 to 12 pax
        from 7pm till 10.30pm
      </p>
      <p>
        for 8pax or more, additional mains will be served as indicated in the
        menu
      </p>

      <Link to="/project1-bootcamp/book" className="btn btn-dark">
        Book Now!
      </Link>
    </div>
  );

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
            <About />
          </div>
          <ImgDivider img={rendangCrostini} />
        </div>
        <div className="row" id="curr-menu">
          <div className="col-lg-6 col-sm-12 d-lg-none">{this.currDates}</div>
          <div className="col-lg-6 p-0">
            <CurrMenu />
          </div>
          <div className="col-lg-6 col-sm-12 d-lg-block d-none">
            {this.currDates}
          </div>
        </div>
        <div className="row" id="faq">
          <FAQ />
        </div>

        <div id="contact">
          <h1>Follow us below for the latest updates!</h1>
        </div>
      </div>
    );
  }
}

export default App;
