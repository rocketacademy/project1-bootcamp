import { motion } from "framer-motion";
import { isOdd } from "../utils";

const QuestionDisplay = (props) => {
  const { question } = props;
  let questionList = question.value.map((option, i) => (
    <motion.li
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.1 }}
      exit={{ opacity: 0, y: 20 }}
      key={option}
    >
      <button onClick={props.handleClick} name={question.name} value={option}>
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
      {props.questionNo === 3 && props.locationButton && (
        <button id="get-location" onClick={props.handleLocation}>
          <img src="./icons/location.svg" alt="location icon" />
          {props.buttonText}
        </button>
      )}
      <button id="skip" onClick={props.handleSkip}>
        All of the above
      </button>
    </div>
  );
};

export default QuestionDisplay;
