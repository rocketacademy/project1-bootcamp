import React from "react";
import "./MajorChords.css";

class MajorChords extends React.Component {
  render() {
    const { majorChord } = this.props;
    return (
      <div className="index">
        <div className="ma-overlap-group">
          {majorChord === "A" && (
            <div className="a-chord">
              <div className="ma-ellipse" />
              <div className="ma-ellipse-2" />
              <div className="ma-ellipse-3" />
              <div className="ma-group">
                <div className="ma-ellipse-4" />
              </div>
              <div className="ma-ellipse-wrapper">
                <div className="ma-ellipse-4" />
              </div>
              <div className="overlap-group-wrapper">
                <div className="img-wrapper">
                  <img
                    className="img"
                    alt="Ma line"
                    src="https://cdn.animaapp.com/projects/6507b36226ab18e0ca06ce51/releases/6507b3f96842c13feb4f4fd4/img/line-3.svg"
                  />
                </div>
              </div>
            </div>
          )}
          {majorChord === "B" && (
            <div className="b-chord">
              <div className="ma-rectangle" />
              <div className="ma-ellipse-5" />
              <div className="ma-ellipse-2" />
              <div className="ma-ellipse-6" />
              <div className="div-wrapper">
                <div className="img-wrapper">
                  <img
                    className="img"
                    alt="Ma line"
                    src="https://cdn.animaapp.com/projects/6507b36226ab18e0ca06ce51/releases/6507b3f96842c13feb4f4fd4/img/line-3.svg"
                  />
                </div>
              </div>
            </div>
          )}
          {majorChord === "C" && (
            <div className="c-chord">
              <div className="ma-ellipse-7" />
              <div className="ma-ellipse-8" />
              <div className="ma-ellipse-9" />
              <div className="ma-group-2">
                <div className="ma-ellipse-4" />
              </div>
              <div className="ma-group-3">
                <div className="ma-ellipse-4" />
              </div>
              <div className="ma-group-4">
                <div className="img-wrapper">
                  <img
                    className="img"
                    alt="Ma line"
                    src="https://cdn.animaapp.com/projects/6507b36226ab18e0ca06ce51/releases/6507b3f96842c13feb4f4fd4/img/line-3.svg"
                  />
                </div>
              </div>
            </div>
          )}
          {majorChord === "D" && (
            <div className="d-chord">
              <div className="ma-ellipse-10" />
              <div className="ma-ellipse-11" />
              <div className="ma-ellipse-12" />
              <div className="ma-group-5">
                <div className="ma-ellipse-4" />
              </div>
              <div className="ma-group-6">
                <div className="ma-cross">
                  <div className="img-wrapper">
                    <img
                      className="img"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/6507b36226ab18e0ca06ce51/releases/6507b3f96842c13feb4f4fd4/img/line-3.svg"
                    />
                  </div>
                </div>
                <div className="ma-cross-2">
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
          {majorChord === "E" && (
            <div className="e-chord">
              <div className="ma-ellipse-13" />
              <div className="ma-ellipse-14" />
              <div className="ma-ellipse-15" />
              <div className="ma-group-7">
                <div className="ma-ellipse-4" />
              </div>
              <div className="ma-group-8">
                <div className="ma-ellipse-4" />
              </div>
              <div className="ma-group-9">
                <div className="ma-ellipse-4" />
              </div>
            </div>
          )}
          {majorChord === "F" && (
            <div className="f-chord">
              <div className="ma-rectangle-2" />
              <div className="ma-ellipse-16" />
              <div className="ma-ellipse" />
              <div className="ma-ellipse-17" />
            </div>
          )}
          {majorChord === "G" && (
            <div className="g-chord">
              <div className="ma-ellipse-18" />
              <div className="ma-ellipse-19" />
              <div className="ma-ellipse-3" />
              <div className="ma-ellipse-20" />
              <div className="overlap-2">
                <div className="ma-group-10">
                  <div className="ma-ellipse-4" />
                </div>
                <div className="ma-group-11">
                  <div className="ma-ellipse-4" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MajorChords;
