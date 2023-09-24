import React from "react";
import "./AG-Buttons.css";
import AChord from "./audio/A-Chord.mp3";
import BChord from "./audio/B-Chord.mp3";
import CChord from "./audio/C-Chord.mp3";
import DChord from "./audio/D-Chord.mp3";
import EChord from "./audio/E-Chord.mp3";
import FChord from "./audio/F-Chord.mp3";
import GChord from "./audio/G-Chord.mp3";

class AGButtons extends React.Component {
  play = (sound) => {
    new Audio(sound).play();
  };

  render() {
    const { changeMajorChord } = this.props;
    return (
      <div className="index-AG">
        <div className="AG-Buttons">
          <button
            className="button"
            onClick={() => {
              changeMajorChord("A");
              this.play(AChord);
            }}
          >
            A
          </button>
          <button
            className="button"
            onClick={() => {
              changeMajorChord("B");
              this.play(BChord);
            }}
          >
            B
          </button>
          <button
            className="button"
            onClick={() => {
              changeMajorChord("C");
              this.play(CChord);
            }}
          >
            C
          </button>
          <button
            className="button"
            onClick={() => {
              changeMajorChord("D");
              this.play(DChord);
            }}
          >
            D
          </button>
          <button
            className="button"
            onClick={() => {
              changeMajorChord("E");
              this.play(EChord);
            }}
          >
            E
          </button>
          <button
            className="button"
            onClick={() => {
              changeMajorChord("F");
              this.play(FChord);
            }}
          >
            F
          </button>
          <button
            className="button"
            onClick={() => {
              changeMajorChord("G");
              this.play(GChord);
            }}
          >
            G
          </button>
        </div>
      </div>
    );
  }
}
export default AGButtons;
