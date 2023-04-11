import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const settingOptions = ["halal", "vegetarian"];

export default class Settings extends React.Component {
  handleClick = (e) => {
    const settings = Object.assign({}, this.props.settings);
    let value = e.target.value;
    settings[value] = !settings[value];
    localStorage.setItem("settings", JSON.stringify(settings));
    this.props.handleUpdate("settings", settings);
  };

  render() {
    return (
      <AnimatePresence>
        {this.props.navShow && (
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            id="settings-nav"
          >
            {settingOptions.map((option) => (
              <div key={option} className="checklist">
                <input
                  value={option}
                  type="checkbox"
                  defaultChecked={this.props.settings[option]}
                  onClick={this.handleClick}
                />
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
}
