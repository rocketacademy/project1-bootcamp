import React from "react";
import OurNav from "../Components/OurNav.js";
import teleQR from "../images/teleQR.jpg";
import teleBook from "../images/teleBook.jpg";
import Follow from "../Components/Follow.js";

import backgroundWide1 from "../images/backgroundWide1.jpg";

import "./Book.css";

class Book extends React.Component {
  render() {
    return (
      <div className="cont">
        <OurNav />
        <div
          className="col-lg-12 book-container book-background"
          style={{ backgroundImage: `url(${backgroundWide1})` }}
        >
          <h1 className="book-header mb-2">
            Scan the code below or click to book with Celina!
          </h1>
          <a href="https://t.me/Celina_Tan">
            <img
              className="col-lg-4 col-sm-5 col-5 book-link"
              src={teleBook}
              href="https://t.me/+51G0to4dOdM4YTBl"
              alt="QR code to book with Celina"
            />
          </a>
        </div>
        <div className="col-lg-12 book-container">
          <h2 className="book-header">
            Scan the code below or click to stay updated with our intimate
            events
          </h2>
          <a href="https://t.me/+51G0to4dOdM4YTBl">
            <img
              className="col-lg-2 col-sm-3 col-3"
              src={teleQR}
              href="https://t.me/+51G0to4dOdM4YTBl"
              alt="QR code to join Telegram channel"
            />
          </a>
        </div>
        <div className="follow">
          <Follow />
        </div>
      </div>
    );
  }
}

export default Book;
