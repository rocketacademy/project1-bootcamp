import "./App.css";
import "./table-style.css";

const MinorScales = (props) => {
  return (
    <>
      <div className="minor-scales-section" id="padding-container">
        <div className="scales-table">
          <div className="scales-table-title">
            <h1>Minor Scales</h1>
          </div>
          <div className="flex">
            <div>
              <h6>W H W W H W W</h6>
            </div>
            <div>
              <h6>Accidentals</h6>
            </div>
          </div>
          <div className="scales-table-main">
            <div className="flex-left">
              <h4>Am:</h4>
              <h4>Bm:</h4>
              <h4>Cm:</h4>
              <h4>Dm:</h4>
              <h4>Em:</h4>
              <h4>Fm:</h4>
              <h4>Gm:</h4>
              <h4>C#m:</h4>
              <h4>D#m:</h4>
              <h4>F#m:</h4>
              <h4>G#m:</h4>
              <h4>Bbm:</h4>
            </div>
            <div className="flex-text">
              <p>A B C D E F G A</p>
              <p>B C# D E F# G A B</p>
              <p>C D Eb F G Ab Bb C</p>
              <p>D E F G A Bb C D</p>
              <p>E F# G A B C D E</p>
              <p>F G Ab Bb C Db Eb F</p>
              <p>G A Bb C D Eb F G</p>
              <p>C# D# E F# G# A B C#</p>
              <p>D# F F# G# A# B C# D#</p>
              <p>F# G# A B C# D E F#</p>
              <p>G# A# B C# D# E F# G#</p>
              <p>Bb C Db Eb F Gb Ab Bb</p>
            </div>
            <div className="flex-accidentals">
              <p>nil</p>
              <p>2 Sharps</p>
              <p>3 Flats</p>
              <p>1 Flat</p>
              <p>1 Sharp</p>
              <p>4 Flats</p>
              <p>2 Flats</p>
              <p>5 Sharps</p>
              <p>6 Sharps</p>
              <p>4 Sharps</p>
              <p>6 Sharps</p>
              <p>5 Flats</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinorScales;
