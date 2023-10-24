//React Components
import React from "react";
//Images
import teleQR from "../images/teleQR.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="col-lg-6">
        <h2>About Us</h2>
        <p>
          Intimate suppers celebrates the world of fine dining in a cozy home
          environment. Join us at our hideout for a gastronomical experience you
          will never forget.
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
    );
  }
}

export default About;
