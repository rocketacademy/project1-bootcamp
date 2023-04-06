import React from "react";

export default class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 1,
      locationButton: true,
      buttonText: "2KM Radius",
    };
  }
  handleClick = (e) => {
    const { name, value } = e.target;
    this.props.handleUpdate(name, value);
    if (this.state.question < 4) {
      this.setState({
        question: this.state.question + 1,
      });
    } else {
      this.setState({
        question: 1,
      });
      this.props.handleNext();
    }
  };

  handleSkip = () => {
    this.setState({
      question: this.state.question + 1,
    });
  };

  handleLocation = async () => {
    await this.setState({
      buttonText: "Getting location",
    });
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.handleUpdate("area", [
          position.coords.latitude,
          position.coords.longitude,
        ]);
        this.setState({
          question: this.state.question + 1,
        });
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert("Can't find your location!");
          this.setState({
            locationButton: false,
          });
        }
      }
    );
  };

  render() {
    const { question } = this.state;
    let displayQuestion;
    if (question === 1) {
      displayQuestion = (
        <div>
          <h2>Which?</h2>
          <button onClick={this.handleClick} name="meal" value="Breakfast">
            Breakfast
          </button>
          <button onClick={this.handleClick} name="meal" value="Brunch">
            Brunch
          </button>
          <button onClick={this.handleClick} name="meal" value="Lunch">
            Lunch
          </button>
          <button onClick={this.handleClick} name="meal" value="Dinner">
            Dinner
          </button>
          <button onClick={this.handleClick} name="meal" value="Dessert">
            Dessert
          </button>
        </div>
      );
    } else if (question === 2) {
      displayQuestion = (
        <div>
          <h2>What?</h2>
          <button onClick={this.handleClick} name="type" value="H">
            Hawker
          </button>
          <button onClick={this.handleClick} name="type" value="C">
            Casual Eatery
          </button>
          <button onClick={this.handleClick} name="type" value="R">
            Restaurant
          </button>
        </div>
      );
    } else if (question === 3) {
      displayQuestion = (
        <div>
          <h2>Where?</h2>
          <button onClick={this.handleClick} name="area" value="NT">
            North
          </button>
          <button onClick={this.handleClick} name="area" value="NE">
            Northeast
          </button>
          <button onClick={this.handleClick} name="area" value="CN">
            Central
          </button>
          <button onClick={this.handleClick} name="area" value="WT">
            West
          </button>
          <button onClick={this.handleClick} name="area" value="ET">
            East
          </button>
          {this.props.locationAvailable && this.state.locationButton ? (
            <button onClick={this.handleLocation}>
              {this.state.buttonText}
            </button>
          ) : (
            <div></div>
          )}
        </div>
      );
    } else if (question === 4) {
      displayQuestion = (
        <div>
          <h2>Tap to find out your rec</h2>
          <button onClick={this.handleClick}>CLICK ME</button>
        </div>
      );
    }
    return (
      <div className="screen" id="question">
        <h1>Makan Where</h1>
        {displayQuestion}
        <div>
          <button onClick={this.props.handleRestart}>Restart</button>
          <button onClick={this.handleSkip}>Skip</button>
        </div>
      </div>
    );
  }
}
