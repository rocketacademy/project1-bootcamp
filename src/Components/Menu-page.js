import React from "react";
import "./Menu-page.css";

class MenuPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="index-MP">
        <div className="overlap-group-wrapper-MP">
          <div className="overlap-group-MP">
            <img
              className="guitar-you"
              alt="Guitar you"
              src="images/Guitar 4 you-01.png"
            />
            <div className="overlap-MP">
              <button
                className="learn-chords"
                onClick={() => {
                  this.props.changeToChordsPage();
                }}
              >
                Learn Chords
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuPage;
