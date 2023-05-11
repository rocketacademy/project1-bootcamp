import React from "react";
import { AnimatePresence } from "framer-motion";
import ReactSlider from "react-slider";
import Fade from "./Fade";

const settingOptions = ["halal", "vegetarian"];

const Settings = (props) => {
  const handleClick = (e) => {
    const settings = Object.assign({}, props.settings);
    let value = e.target.value;
    settings[value] = !settings[value];
    localStorage.setItem("settings", JSON.stringify(settings));
    props.handleUpdate("settings", settings);
  };

  const handleChange = (value) => {
    const settings = Object.assign({}, props.settings);
    settings["searchRadius"] = value;
    localStorage.setItem("settings", JSON.stringify(settings));
    props.handleUpdate("settings", settings);
  };

  return (
    <AnimatePresence>
      {props.navShow && (
        <Fade idName="settings-nav">
          <h2>Filters</h2>
          <div id="settings-checklist">
            {settingOptions.map((option) => (
              <div key={option} className="checklist">
                <input
                  value={option}
                  type="checkbox"
                  defaultChecked={props.settings[option]}
                  onClick={handleClick}
                />
                {option}
              </div>
            ))}
          </div>
          <div id="settings-search">
            <h4>
              Search Radius:
              <br />
              {props.settings["searchRadius"]} km
            </h4>
            <ReactSlider
              className="slider"
              trackClassName="slider-track"
              thumbClassName="slider-thumb"
              min={0.5}
              max={4}
              step={0.5}
              defaultValue={props.settings["searchRadius"]}
              onChange={handleChange}
            />
          </div>
        </Fade>
      )}
    </AnimatePresence>
  );
};

export default Settings;
