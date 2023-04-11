import React from "react";
import Settings from "./Settings";
import { motion } from "framer-motion";

const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const imageList = [
  "https://i.imgur.com/GFU4Rck.jpg",
  "https://i.imgur.com/7JX5nqm.jpg",
  "https://i.imgur.com/CzmORKO.jpg",
  "https://i.imgur.com/P4dTYzY.jpg",
  "https://i.imgur.com/ciSqZkv.jpg",
  "https://i.imgur.com/YzyslzF.jpg",
  "https://i.imgur.com/hwu8nZ3.jpg",
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: randomNumber(imageList.length),
      navShow: false,
    };
  }
  getRandomImage = (number) => {
    return imageList[number];
  };

  handleClick = () => {
    this.setState({
      navShow: !this.state.navShow,
    });
  };

  render() {
    const randomImage = this.getRandomImage(this.state.select);
    return (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="screen"
        id="home"
      >
        <div className="header">
          <img id="long-logo" src="./logos/logo-black-wide.svg" alt="logo" />
          <img id="stacked-logo" src="./logos/logo-home.svg" alt="logo" />
          <h4>By @markan.sg</h4>
        </div>
        <div className="hero-image">
          <img src={randomImage} alt="Food pic from @markan.sg!" />
          <img id="logo" src="./logos/icon-blue.svg" alt="logo" />
        </div>
        <div className="footer">
          <button onClick={this.props.handleNext}>
            Tap for a recommendation
          </button>
          <button id="settings" onClick={this.handleClick}>
            ...
          </button>
        </div>
        <Settings
          navShow={this.state.navShow}
          settings={this.props.settings}
          handleUpdate={this.props.handleUpdate}
        />
      </motion.div>
    );
  }
}
