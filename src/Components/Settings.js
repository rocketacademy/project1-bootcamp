import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactSlider from "react-slider";

const settingOptions = ["halal", "vegetarian"];

export default class Settings extends React.Component {
  handleClick = (e) => {
    const settings = Object.assign({}, this.props.settings);
    let value = e.target.value;
    settings[value] = !settings[value];
    localStorage.setItem("settings", JSON.stringify(settings));
    this.props.handleUpdate("settings", settings);
  };

  handleChange = (value) => {
    const settings = Object.assign({}, this.props.settings);
    settings["searchRadius"] = value;
    localStorage.setItem("settings", JSON.stringify(settings));
    this.props.handleUpdate("settings", settings);
  };

  render() {
    return (
      <AnimatePresence>
        {this.props.navShow && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            id="settings-nav"
          >
            <h2>Settings</h2>
            <div id="settings-checklist">
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
            </div>
            <div id="settings-search">
              <h4>
                Search Radius:
                <br />
                {this.props.settings["searchRadius"]} km
              </h4>
              <ReactSlider
                className="slider"
                trackClassName="slider-track"
                thumbClassName="slider-thumb"
                min={0.5}
                max={4}
                step={0.5}
                defaultValue={this.props.settings["searchRadius"]}
                onChange={this.handleChange}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
}
