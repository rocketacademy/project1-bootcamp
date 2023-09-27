import React from "react";
import "./MinorChords.css";

class MinorChords extends React.Component {
  render() {
    const { minorChord } = this.props;
    return (
      <div className="index">
        <div className="chords-group">
          {minorChord === "Am" && (
            <div className="am-chord">
              <div className="m-ellipse" />
              <div className="div" />
              <div className="m-ellipse-2" />
              <div className="m-group">
                <div className="m-ellipse-3" />
              </div>
              <div className="m-ellipse-wrapper">
                <div className="m-ellipse-3" />
              </div>
              <div className="m-overlap-group-wrapper">
                <div className="img-wrapper">
                  <img
                    className="img"
                    alt="M line"
                    src="https://cdn.animaapp.com/projects/6507b36226ab18e0ca06ce51/releases/6507b3f96842c13feb4f4fd4/img/line-3.svg"
                  />
                </div>
              </div>
            </div>
          )}
          {minorChord === "Bm" && (
            <div className="bm-chord">
              <div className="m-rectangle" />
              <div className="m-ellipse-4" />
              <div className="div" />
              <div className="m-ellipse-5" />
              <div className="div-wrapper">
                <div className="img-wrapper">
                  <img
                    className="img"
                    alt="M line"
                    src="https://cdn.animaapp.com/projects/6507b36226ab18e0ca06ce51/releases/6507b3f96842c13feb4f4fd4/img/line-3.svg"
                  />
                </div>
              </div>
            </div>
          )}
          {minorChord === "Cm" && (
            <div className="cm-chord">
              <div className="m-rectangle-2" />
              <div className="m-ellipse-4" />
              <img
                className="m-ellipse-6"
                alt="M ellipse"
                src="https://cdn.animaapp.com/projects/6507b36226ab18e0ca06ce51/releases/650e6f3b2e4e252d8d5cdcf1/img/ellipse-2.svg"
              />
              <div className="m-ellipse-7" />
              <div className="m-group-2">
                <div className="img-wrapper">
                  <img
                    className="img"
                    alt="M line"
                    src="https://cdn.animaapp.com/projects/6507b36226ab18e0ca06ce51/releases/6507b3f96842c13feb4f4fd4/img/line-3.svg"
                  />
                </div>
              </div>
            </div>
          )}
          {minorChord === "Dm" && (
            <div className="dm-chord">
              <div className="m-ellipse-8" />
              <div className="m-ellipse-9" />
              <div className="m-ellipse-10" />
              <div className="m-group-3">
                <div className="m-ellipse-3" />
              </div>
              <div className="m-group-4">
                <div className="m-cross">
                  <div className="img-wrapper">
                    <img
                      className="img"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/6507b36226ab18e0ca06ce51/releases/6507b3f96842c13feb4f4fd4/img/line-3.svg"
                    />
                  </div>
                </div>
                <div className="m-cross-2">
                  <div className="img-wrapper">
                    <img
                      className="img"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/6507b36226ab18e0ca06ce51/releases/6507b3f96842c13feb4f4fd4/img/line-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {minorChord === "Em" && (
            <div className="em-chord">
              <div className="m-ellipse-11" />
              <div className="m-ellipse-12" />
              <div className="m-group-5">
                <div className="m-ellipse-3" />
              </div>
              <div className="m-group-6">
                <div className="m-ellipse-3" />
              </div>
              <div className="m-group-7">
                <div className="m-ellipse-3" />
              </div>
              <div className="m-group-8">
                <div className="m-ellipse-3" />
              </div>
            </div>
          )}
          {minorChord === "Fm" && (
            <div className="fm-chord">
              <div className="m-rectangle-3" />
              <div className="m-ellipse-13" />
              <div className="m-ellipse" />
            </div>
          )}
          {minorChord === "Gm" && (
            <div className="gm-chord">
              <div className="m-rectangle-4" />
              <div className="m-ellipse-13" />
              <div className="m-ellipse" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MinorChords;
