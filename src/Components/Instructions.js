import React from "react";
import { motion } from "framer-motion";

export default class Instructions extends React.Component {
  render() {
    return (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="screen"
        id="instructions"
      >
        <div className="header">
          <img src="./logos/logo-white-wide.svg" alt="logo" />
        </div>
        <div id="instructions-box">
          <h2>
            Don't know
            <br />
            what to eat?
          </h2>
          <h4>1. Answer 3 questions</h4>
          <h4>2. I’ll randomly recommend you something!</h4>
        </div>
        <p>
          (Enable location sharing in settings to get location based
          recommendations!)
        </p>
        <button onClick={this.props.handleNext}>Tap to begin</button>
      </motion.div>
    );
  }
}
