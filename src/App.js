import React from "react";
// import logo from "./logo.png";
import "./App.css";
import OurNav from "./Components/OurNav.js";

const placeholder =
  "https://lh3.googleusercontent.com/pw/ADCreHfi0lIjOOKCmN0WKrwIl7jRoEETDa7_7_55m7dQxl4qgRorzqfkCHZoh24FiBMdfIln4PMo-iq7wiz0H-lhRWdYgv0PJ4klXBI5uYi3AAlS8jZaTpYBLfh98-kdFSo4RDRyAol6Kn9veC707eRY6JhtUL4wqEsL63aDg-JbRZJE_a8bguzyxGEZxtLhwPzPBD0aEF7CHH5qAFYaxqmzSmIpQVRX2bfC5g2KE_aM8Ks-whk70ZQn3Rf2UFYbYKZWQJJDIZ7HETcaflgigdg4tPmSXDiK2vPWluVpadRU0flpV5zi5afbq-OSHWPSpKamjpXw-8AfdkBhj2syRUoSYr7_JLZ8blAmUD1xBAa-EDERKyuuDgGJb8fU4YueS0Xb3MwDt0Mt4_p6_P4wzTLoBL_BqgYmHSU4jSpS3G-ldGC-0wQ5ezpq7fD6TEewAHYDec6gQ0mJ-wF_TY9gA2Ym2RYuwoiC3BX33sDZ1nysiyGQRW3V-NqVcOykk9G5piqL6KfV81nvODfzhnUMx5RH2pDE-Ef1EWezojGY3Y10fOvf4n-MEa9jZLyz2qVG2lYmO5qtS8EaGRM8DKjiE3U2ewGHDIq21ekwKX1lkhQ7R4H6P9jfpRKOfQ3T5KZQch6VTsMhD6BxAicfXARURC93PWeiZPYYq-2j-Ep5OWvuKiM702OeVV8YorOmFXjvirdu2gbvBu4u2PL9VIDEuh4DJtiSgrQOks86GcPJXuIYhcuP-6SinvMqAtR_0qTzw0OJLa8BqtUkzQtUG0dFHOVJhKnoGQUWCfEqTbu4tCFGUGOiEQ2QVHJ0qENerhZbOdLCGa2B-D8sFKhH8eYY8FqXscDHHicf_zIEsW-0vhjbpVkT1_mIBwZFbu2HF0ivKQBEbFKrgKXoU1vM-l23zYBAMXhERHxGlUJUX5102XGSz_pqaKkDMObtzu_dp5Q=w640-h800-s-no-gm?authuser=1";

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
      <div className="App">
        <OurNav />
        <div id="about">
          <img src={placeholder} className="App-logo" alt="logo" />
          <h1>About Us</h1>
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
