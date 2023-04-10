import React from "react";
import { motion } from "framer-motion";

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
      locationButton: true,
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
      searchRadius: "",
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
          alert("Can't find your location!");
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
    let questionList;
    if (question < 4) {
      questionList = currentQuestion.value.map((option, i) => (
        <motion.li
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          exit={{ opacity: 0, y: 20 }}
          key={option}
        >
          <button
            onClick={this.handleClick}
            name={currentQuestion.name}
            value={option}
          >
            {currentQuestion.display[i]}
          </button>
        </motion.li>
      ));
      displayQuestion = (
        <div className="question-box">
          <motion.h2
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            {currentQuestion.q}
          </motion.h2>
          <ul className="question-options">{questionList}</ul>
          {question === 3 &&
            this.props.locationAvailable &&
            this.state.locationButton && (
              <button id="get-location" onClick={this.handleLocation}>
                <img src="./icons/location.svg" alt="location icon" />
                {this.state.buttonText}
              </button>
            )}
          <button id="skip" onClick={this.handleSkip}>
            All of the above
          </button>
        </div>
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
