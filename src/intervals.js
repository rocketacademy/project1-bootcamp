import Navbar from "./components/navbar";
import "./intervals.css";
import "./App.css";
import "./basics.css";

const Intervals = (props) => {
  return (
    <>
      <Navbar />
      <div className="padding-container">
        <div className="container-flex-left">
          <div className="title">Intervals</div>
          <p id="text-align-left">Whole tone- W</p>
          <p id="text-align-left">Half tone - H</p>
          <div>
            <h2>C: C D E F G A B C</h2>
            <div>
              <img src={require(`../src/assets/c-major.png`)} />
            </div>
            <h2>E: E F# G# A B C# D# E</h2>
            <div>
              <img src={require(`../src/assets/e-major.png`)} />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button
            className="left-button"
            onClick={() => props.setPageNumber(2)}
          >
            <div i class="fa-solid fa-caret-left"></div>
          </button>
          <button
            className="right-button"
            onClick={() => props.setPageNumber(4)}
          >
            <div i class="fa-solid fa-caret-right"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Intervals;
