import Navbar from "./components/navbar";
import "./basics.css";
import MajorScales from "./major-scales";

const CircleOfFifths = (props) => {
  // const [showMajorScale, circleMajorScale] = useState(false);
  return (
    <>
      <Navbar />
      <div className="padding-container">
        <div className="container-flex-left">
          <div className="title">Circle of Fifths</div>
          <p id="text-align-left">
            In music theory, the circle of fifths is a way of organizing the 12
            chromatic pitches as a sequence of perfect fifths.
          </p>
          <div>
            <img src={require(`../src/assets/circle-fifths1.png`)} alt="" />
          </div>
          <div>
            {/* {!showMajorScale && (
          <img src={require(`../src/assets/circle-fifths2.png`)} />
        )}
        {showMajorScale && (
          <img src={require(`../src/assets/circle-fifths3.png`)} />
        )}
        <button onClick={() => circleMajorScale(!showMajorScale)}>About</button> */}
            {/* <button
          className="about"
          onClick={() => circleMajorScale(!showMajorScale)}
        > */}
            <button>major scales</button>
            <button>minor scales</button>
          </div>
          <div className="button-container">
            <button
              className="left-button"
              onClick={() => props.setPageNumber(5)}
            >
              <div i class="fa-solid fa-caret-left"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircleOfFifths;
