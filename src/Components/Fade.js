import React from "react";
import { motion } from "framer-motion";

export default class Fade extends React.Component {
  render() {
    return (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className={this.props.className ? this.props.className : undefined}
        id={this.props.idName ? this.props.idName : undefined}
      >
        {this.props.children}
      </motion.div>
    );
  }
}
