import "./App.css";
import "./table-style.css";

const MajorScales = (props) => {
  return (
    <>
      <div className="major-scales-section" id="padding-container">
        <div className="scales-table">
          <div className="scales-table-title">
            <h1>Major Scales</h1>
          </div>
          <div className="flex">
            <div>
              <h6>W W H W W W H</h6>
            </div>
            <div>
              <h6>Accidentals</h6>
            </div>
          </div>
          <div className="scales-table-main">
            <div className="flex-left">
              <h4>C:</h4>
              <h4>D:</h4>
              <h4>E:</h4>
              <h4>F:</h4>
              <h4>G:</h4>
              <h4>A:</h4>
              <h4>B:</h4>
              <h4>F#:</h4>
              <h4>Db:</h4>
              <h4>Ab:</h4>
              <h4>Eb:</h4>
              <h4>Bb:</h4>
            </div>
            <div className="flex-text">
              <p>C D E F G A B C</p>
              <p>D E F# G A B C# D</p>
              <p>E F# G# A B C# D# E</p>
              <p>F G A Bb C D E F</p>
              <p>G A B C D E F# G</p>
              <p>A B C# D E F# G# A</p>
              <p>B C# D# E F# G# A# B</p>
              <p>F# G# A# B C# D# F F#</p>
              <p>Db Eb F Gb Ab Bb C Db</p>
              <p>Ab Bb C Db Eb F G Ab</p>
              <p>Eb F G Ab Bb C D Eb</p>
              <p>Bb C D Eb F G A Bb</p>
            </div>
            <div className="flex-accidentals">
              <p>nil</p>
              <p>2 Sharps</p>
              <p>4 Sharps</p>
              <p>1 Flat</p>
              <p>1 Sharp</p>
              <p>3 Sharps</p>
              <p>5 Sharps</p>
              <p>6 Sharps</p>
              <p>5 Flats</p>
              <p>5 Flats</p>
              <p>4 Flats</p>
              <p>3 Flats</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MajorScales;
