import React from "react";
import "./LearnChords.css";
import AGButtons from "./AG-Buttons";
import AmGmButtons from "./AmGm-Buttons";
import MajorMinor from "./MajorMinor";
import MinorChords from "./MinorChords";
import MajorChords from "./MajorChords";

class LearnChords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedScale: "MAJOR",
      majorChord: "NONE",
      minorChord: "NONE",
    };
  }

  toggleSelectedScale = () => {
    this.setState({
      selectedScale: this.state.selectedScale === "MAJOR" ? "MINOR" : "MAJOR",
    });
  };

  changeMajorChord = (newChord) => {
    this.setState({
      majorChord: newChord,
      minorChord: "NONE",
    });
  };

  changeMinorChord = (newChord) => {
    this.setState({
      majorChord: "NONE",
      minorChord: newChord,
    });
  };

  render() {
    return (
      <div className="index-page2">
        <div className="overlap-wrapper">
          {this.state.selectedScale === "MAJOR" ? (
            <AGButtons changeMajorChord={this.changeMajorChord} />
          ) : (
            <AmGmButtons changeMinorChord={this.changeMinorChord} />
          )}
          <MajorMinor
            selectedScale={this.state.selectedScale}
            toggleSelectedScale={this.toggleSelectedScale}
          />
          {this.state.selectedScale === "MAJOR" ? (
            <MajorChords majorChord={this.state.majorChord} />
          ) : (
            <MinorChords minorChord={this.state.minorChord} />
          )}
          <button
            className="Menu-button"
            onClick={() => {
              this.props.changeToMenuPage();
            }}
          >
            MENU
          </button>
        </div>
      </div>
    );
  }
}

export default LearnChords;
