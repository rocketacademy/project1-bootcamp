import React from "react";
import "./AmGm-Buttons.css";
import AmChord from "./audio/Am-Chord.mp3";
import BmChord from "./audio/Bm-Chord.mp3";
import CmChord from "./audio/Cm-Chord.mp3";
import DmChord from "./audio/Dm-Chord.mp3";
import EmChord from "./audio/Em-Chord.mp3";
import FmChord from "./audio/Fm-Chord.mp3";
import GmChord from "./audio/Gm-Chord.mp3";

class AmGmButtons extends React.Component {
  play = (sound) => {
    new Audio(sound).play();
  };

  render() {
    const { changeMinorChord } = this.props;
    return (
      <div className="index">
        <div className="AmGm-Buttons">
          <button
            className="button"
            onClick={() => {
              changeMinorChord("Am");
              this.play(AmChord);
            }}
          >
            Am
          </button>
          <button
            className="button"
            onClick={() => {
              changeMinorChord("Bm");
              this.play(BmChord);
            }}
          >
            Bm
          </button>
          <button
            className="button"
            onClick={() => {
              changeMinorChord("Cm");
              this.play(CmChord);
            }}
          >
            Cm
          </button>
          <button
            className="button"
            onClick={() => {
              changeMinorChord("Dm");
              this.play(DmChord);
            }}
          >
            Dm
          </button>
          <button
            className="button"
            onClick={() => {
              changeMinorChord("Em");
              this.play(EmChord);
            }}
          >
            Em
          </button>
          <button
            className="button"
            onClick={() => {
              changeMinorChord("Fm");
              this.play(FmChord);
            }}
          >
            Fm
          </button>
          <button
            className="button"
            onClick={() => {
              changeMinorChord("Gm");
              this.play(GmChord);
            }}
          >
            Gm
          </button>
        </div>
      </div>
    );
  }
}
export default AmGmButtons;
