import React from "react";
import { motion } from "framer-motion";
import QuestionDisplay from "./QuestionDisplay";

export default class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 1,
      questions: [
        {
          q: "Which?",
          name: "meal",
          value: ["Breakfast", "Brunch", "Lunch", "Dinner", "Dessert"],
          display: ["Breakfast", "Brunch", "Lunch", "Dinner", "Dessert"],
        },
        {
          q: "What?",
          name: "type",
          value: ["H", "C", "R"],
          display: ["Hawker", "Casual Dining", "$$$ Dining"],
        },
        {
          q: "Where?",
          name: "area",
          value: ["NT", "NE", "CN", "WT", "ET"],
          display: ["North", "Northeast", "Central", "West", "East"],
        },
      ],
      locationButton: this.props.locationAvailable,
      buttonText: "Current Location",
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

  handleBack = () => {
    this.setState({
      question: this.state.question - 1,
    });
  };

  handleLocation = async () => {
    await this.setState({
      buttonText: "Getting location...",
    });
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.handleUpdate("area", {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        this.setState({
          question: this.state.question + 1,
        });
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert(
            "Can't find your location! Enable location services for your browser in settings."
          );
          this.setState({
            locationButton: false,
          });
        }
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: Infinity,
      }
    );
  };

  render() {
    const { question, questions } = this.state;
    let currentQuestion = questions[question - 1];
    let displayQuestion;
    if (question < 4) {
      displayQuestion = (
        <QuestionDisplay
          handleClick={this.handleClick}
          handleLocation={this.handleLocation}
          handleSkip={this.handleSkip}
          questionNo={question}
          question={currentQuestion}
          locationButton={this.state.locationButton}
          buttonText={this.state.buttonText}
        />
      );
    } else if (question === 4) {
      displayQuestion = (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="question-box"
        >
          <h2>Tap here</h2>
          <button id="logo-button" onClick={this.handleClick}>
            <img src="./logos/icon-white.svg" alt="logo" />
          </button>
          <h2>
            to get
            <br />
            your rec!
          </h2>
        </motion.div>
      );
    }
    return (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="screen"
        id="question"
      >
        <div className="header">
          <img src="./logos/logo-white-wide.svg" alt="logo" />
        </div>
        {displayQuestion}
        <div className="footer">
          <button onClick={this.props.handleRestart}>Restart</button>
          {question !== 1 && <button onClick={this.handleBack}>Back</button>}
        </div>
      </motion.div>
    );
  }
}
