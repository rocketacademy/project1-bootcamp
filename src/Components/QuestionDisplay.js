import React from "react";
import { motion } from "framer-motion";

const isOdd = (number) => {
  return number % 2 ? true : false;
};

export default class QuestionDisplay extends React.Component {
  render() {
    const { question } = this.props;
    let questionList = question.value.map((option, i) => (
      <motion.li
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ scale: 1.1 }}
        exit={{ opacity: 0, y: 20 }}
        key={option}
      >
        <button
          onClick={this.props.handleClick}
          name={question.name}
          value={option}
        >
          {question.display[i]}
        </button>
      </motion.li>
    ));
    return (
      <div className="question-box">
        <h2>{question.q}</h2>
        <ul
          className={`question-options ${
            !isOdd(question.value.length) && "question-even"
          }`}
        >
          {questionList}
        </ul>
        {this.props.questionNo === 3 && this.props.locationButton && (
          <button id="get-location" onClick={this.props.handleLocation}>
            <img src="./icons/location.svg" alt="location icon" />
            {this.props.buttonText}
          </button>
        )}
        <button id="skip" onClick={this.props.handleSkip}>
          All of the above
        </button>
      </div>
    );
  }
}
