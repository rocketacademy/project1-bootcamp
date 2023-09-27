import React from "react";
import "./MajorMinor.css";

class MajorMinor extends React.Component {
  render() {
    const { selectedScale, toggleSelectedScale } = this.props;
    const selectedButtonClasses = "major-minor-button selected-button";
    const unselectedButtonClass = "major-minor-button";
    return (
      <div className="index-MM">
        <div className="MM-Buttons">
          <button
            className={
              selectedScale === "MAJOR"
                ? selectedButtonClasses
                : unselectedButtonClass
            }
            onClick={() => {
              if (selectedScale === "MINOR") {
                toggleSelectedScale();
              }
            }}
          >
            Major
          </button>
          <button
            className={
              selectedScale === "MINOR"
                ? selectedButtonClasses
                : unselectedButtonClass
            }
            onClick={() => {
              if (selectedScale === "MAJOR") {
                toggleSelectedScale();
              }
            }}
          >
            Minor
          </button>
        </div>
      </div>
    );
  }
}
export default MajorMinor;
