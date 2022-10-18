import "./basics.css";
import "./App.css";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Basics = (props) => {
  return (
    <>
      <Navbar />
      <div className="padding-container">
        <div className="container-flex-left">
          <div className="title">What are Scales?</div>
          <p id="text-align-left">
            In music theory, a scale is any set of musical notes ordered by
            fundamental frequency or pitch. A scale ordered by increasing pitch
            is an ascending scale, and a scale ordered by decreasing pitch is a
            descending scale.
          </p>
          <p id="text-align-left">
            Fundamentally, scales are pattern and intervals that consist of
            whole steps and half steps.
          </p>
        </div>

        <div className="image-container">
          <div className="image-wrapper">
            <img src={require(`../src/assets/whole-step1.png`)} alt="" />
            <img src={require(`../src/assets/whole-step2.png`)} alt="" />
            <img src={require(`../src/assets/half-step.png`)} alt="" />
          </div>
        </div>
        <div className="button-container">
          <button
            className="left-button"
            onClick={() => props.setPageNumber(1)}
          >
            <div i class="fa-solid fa-caret-left"></div>
          </button>
          <button
            className="right-button"
            onClick={() => props.setPageNumber(3)}
          >
            <div i class="fa-solid fa-caret-right"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Basics;
