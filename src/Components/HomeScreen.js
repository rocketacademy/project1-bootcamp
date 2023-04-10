import React from "react";
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
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: randomNumber(imageList.length),
    };
  }
  getRandomImage = (number) => {
    return imageList[number];
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
          <img src="./logos/logo-home.svg" alt="logo" />
          <h4>By @markan.sg</h4>
        </div>
        {/* <img id="logo" src="./logos/icon-blue.svg" alt="logo" /> */}
        <img src={randomImage} alt="Food pic from @markan.sg!" />
        <button onClick={this.props.handleNext}>
          Tap for a recommendation
        </button>
      </motion.div>
    );
  }
}
