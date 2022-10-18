import "./App.css";

const Intervals = (props) => {
  return (
    <>
      <div className="intervals-section" id="padding-container">
        <div className="container-flex-left">
          <div className="title">Intervals</div>
          <div className="align-left">
            <p id="text-align-left">Whole tone- W</p>
            <p id="text-align-left">Half tone - H</p>
          </div>
        </div>
        <div>
          <h2 className="text-color">C: C D E F G A B C</h2>
          <div>
            <img src={require(`../src/assets/c-major.png`)} />
          </div>
          <h2 className="text-color">E: E F# G# A B C# D# E</h2>
          <div>
            <img src={require(`../src/assets/e-major.png`)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intervals;
