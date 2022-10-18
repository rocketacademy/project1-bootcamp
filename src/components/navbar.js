import { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav>
          <a>Scales for dummies</a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="index.html">
                  Basics
                </a>
              </li>
              <li>
                <a href="index.html">Major Scales</a>
              </li>
              <li>
                <a href="index.html">Minor Scales</a>
              </li>
              <li>
                <a href="index.html">Circle of Fifths</a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={
                this.state.clicked ? "fas fa-bars-staggered" : "fas fa-bars"
              }
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
