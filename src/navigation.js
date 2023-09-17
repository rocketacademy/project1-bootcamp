import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <button onClick={() => this.props.navigateTo("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => this.props.navigateTo("/getstarted")}>
              Get Started
            </button>
          </li>
          <li>
            <button onClick={() => this.props.navigateTo("/stock")}>
              Stock
            </button>
          </li>
          <li>
            <button onClick={() => this.props.navigateTo("/trading")}>
              Trading
            </button>
          </li>
          <li>
            <button onClick={() => this.props.navigateTo("/portfolio")}>
              Portfolio
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
