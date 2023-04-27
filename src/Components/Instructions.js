import Fade from "./Fade";

const Instructions = (props) => {
  return (
    <Fade className="screen" idName="instructions">
      <div className="header">
        <img src="./logos/logo-white-wide.svg" alt="logo" />
      </div>
      <div id="instructions-box">
        <h2>
          Don't know
          <br />
          what to eat?
        </h2>
        <h4>1. Answer 3 questions</h4>
        <h4>2. I’ll randomly recommend you something!</h4>
      </div>
      <p>
        (Enable location sharing in settings to get location based
        recommendations!)
      </p>
      <button onClick={props.handleNext}>Tap to begin</button>
    </Fade>
  );
};

export default Instructions;
