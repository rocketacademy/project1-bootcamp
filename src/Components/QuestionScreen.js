import React, { useState } from "react";
import Fade from "./Fade";
import QuestionDisplay from "./QuestionDisplay";

const questions = [
  {
    q: "Which?",
    name: "meal",
    value: ["Breakfast", "Brunch", "Lunch", "Dinner", "Dessert"],
    display: ["Breakfast", "Brunch", "Lunch", "Dinner", "Dessert"],
  },
  {
    q: "What?",
    name: "type",
    value: ["H", "C", "R", "T"],
    display: ["Hawker", "Casual Dining", "$$$ Dining", "Takeaway Only"],
  },
  {
    q: "Where?",
    name: "area",
    value: ["NT", "NE", "CN", "WT", "ET"],
    display: ["North", "Northeast", "Central", "West", "East"],
  },
];

const QuestionScreen = (props) => {
  const [questionNo, setQuestionNo] = useState(1);
  const [locationButton, setLocationButton] = useState(props.locationAvailable);
  const [buttonText, setButtonText] = useState("Use Current Location");

  const handleClick = (e) => {
    const { name, value } = e.target;
    props.handleUpdate(name, value);
    if (questionNo < 4) {
      setQuestionNo((current) => current + 1);
    } else {
      props.handleNext();
    }
  };

  const handleSkip = () => {
    setQuestionNo((current) => current + 1);
  };

  const handleBack = () => {
    setQuestionNo((current) => current - 1);
  };

  const handleLocation = async () => {
    await setButtonText("Getting location...");
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        props.handleUpdate("area", {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setQuestionNo((current) => current + 1);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert(
            "Can't find your location! Enable location services for your browser in settings."
          );
          setLocationButton(false);
        }
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: Infinity,
      }
    );
  };

  let currentQuestion = questions[questionNo - 1];
  let displayQuestion;
  if (questionNo < 4) {
    displayQuestion = (
      <QuestionDisplay
        handleClick={handleClick}
        handleLocation={handleLocation}
        handleSkip={handleSkip}
        questionNo={questionNo}
        question={currentQuestion}
        locationButton={locationButton}
        buttonText={buttonText}
      />
    );
  } else if (questionNo === 4) {
    displayQuestion = (
      <Fade className="question-box">
        <h2>Tap here</h2>
        <button id="logo-button" onClick={handleClick}>
          <img src="./logos/icon-white.svg" alt="logo" />
        </button>
        <h2>
          to get
          <br />
          your rec!
        </h2>
      </Fade>
    );
  }
  return (
    <Fade className="screen" idName="question">
      <div className="header">
        <img src="./logos/logo-white-wide.svg" alt="logo" />
      </div>
      {displayQuestion}
      <div className="footer">
        <button onClick={props.handleRestart}>Restart</button>
        {questionNo !== 1 && <button onClick={handleBack}>Back</button>}
      </div>
    </Fade>
  );
};

export default QuestionScreen;
