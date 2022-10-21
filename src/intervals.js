import "./App.css";

const Intervals = () => {
  return (
    <>
      <div className="padding-container" id="intervals-section">
        <div className="container-flex">
          <div className="title">Intervals</div>
          <div className="align-center">
            <p>Whole tone- W</p>
            <p>Half tone - H</p>
          </div>
        </div>
        <div className="separation-line"></div>
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
