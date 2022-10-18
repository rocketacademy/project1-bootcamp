import "./App.css";

const CircleOfFifths = (props) => {
  return (
    <>
      <div className="circle-of-fifths-section" id="padding-container">
        <div className="container-flex-left">
          <div className="title">Circle of Fifths</div>
          <p id="text-align-left">
            In music theory, the circle of fifths is a way of organizing the 12
            chromatic pitches as a sequence of perfect fifths.
          </p>
        </div>
        <div>
          <img src={require(`../src/assets/circle-fifths1.png`)} alt="" />
        </div>
        {/*<div>
            <button>major scales</button>
            <button>minor scales</button>
  </div> */}
        <button>back to top</button>
      </div>
    </>
  );
};

export default CircleOfFifths;
