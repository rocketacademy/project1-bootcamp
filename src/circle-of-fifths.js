import "./App.css";
import ScrollToTop from "./components/scrollToTop";

const CircleOfFifths = () => {
  return (
    <>
      <div className="padding-container" id="circle-of-fifths-section">
        <div className="container-flex-left">
          <div className="title">Circle of Fifths</div>
          <p id="text-align-left">
            In music theory, the circle of fifths is a way of organizing the 12
            chromatic pitches as a sequence of perfect fifths.
          </p>

          <p id="text-align-left">
            The circle of fifths organizes pitches in a sequence of perfect
            fifths, generally shown as a circle with the pitches (and their
            corresponding keys) in a clockwise progression.
          </p>
        </div>
        <div>
          <img src={require(`../src/assets/circle-fifths1.png`)} alt="" />
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default CircleOfFifths;
