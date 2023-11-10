//React
import React from "react";

// CSS
import "./Follow.css";

class Follow extends React.Component {
  render() {
    return (
      <div>
        <h1>Want to know more?</h1>
        <h4>
          Follow us below to catch the latest updates and release dates of new
          dinners!
        </h4>
        <div className="links-container">
          <a
            href="https://www.facebook.com/intimatesuppers/"
            className="follow-link"
          >
            <i class="fa-brands fa-square-facebook"></i>
            <span>Facebook</span>
          </a>
          <a
            href="https://instagram.com/intimatesuppers?igshid=MXhkc25pYWw0OXkzZA=="
            className="follow-link"
          >
            <i class="fa-brands fa-square-instagram"></i>
            <span>Instagram</span>
          </a>
          <a href="https://t.me/+51G0to4dOdM4YTBl" className="follow-link">
            <i class="fa-brands fa-telegram"></i>
            Telegram
          </a>
        </div>
      </div>
    );
  }
}

export default Follow;
