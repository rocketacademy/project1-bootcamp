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
            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Am:</button>
              </div>
              <div className="flex-text">
                <p>A B C D E F G A</p>
              </div>
              <div className="flex-accidentals">
                <p>nil</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Bm:</button>
              </div>
              <div className="flex-text">
                <p>B C# D E F# G A B</p>
              </div>
              <div className="flex-accidentals">
                <p>2 Sharps</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Cm:</button>
              </div>
              <div className="flex-text">
                <p>C D Eb F G Ab Bb C</p>
              </div>
              <div className="flex-accidentals">
                <p>3 Flats</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Dm:</button>
              </div>
              <div className="flex-text">
                <p>D E F G A Bb C D</p>
              </div>
              <div className="flex-accidentals">
                <p>1 Flat</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Em:</button>
              </div>
              <div className="flex-text">
                <p>E F# G A B C D E</p>
              </div>
              <div className="flex-accidentals">
                <p>1 Sharp</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Fm:</button>
              </div>
              <div className="flex-text">
                <p>F G Ab Bb C Db Eb F</p>
              </div>
              <div className="flex-accidentals">
                <p>4 Flats</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Gm:</button>
              </div>
              <div className="flex-text">
                <p>G A Bb C D Eb F G</p>
              </div>
              <div className="flex-accidentals">
                <p>2 Flats</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">C#m:</button>
              </div>
              <div className="flex-text">
                <p>C# D# E F# G# A B C#</p>
              </div>
              <div className="flex-accidentals">
                <p>5 Sharps</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">D#m:</button>
              </div>
              <div className="flex-text">
                <p>D# F F# G# A# B C# D#</p>
              </div>
              <div className="flex-accidentals">
                <p>6 Sharps</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">F#m:</button>
              </div>
              <div className="flex-text">
                <p>F# G# A B C# D E F#</p>
              </div>
              <div className="flex-accidentals">
                <p>4 Sharps</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">G#m:</button>
              </div>
              <div className="flex-text">
                <p>G# A# B C# D# E F# G#</p>
              </div>
              <div className="flex-accidentals">
                <p>6 Sharps</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Bb:</button>
              </div>
              <div className="flex-text">
                <p>Bb C Db Eb F Gb Ab Bb</p>
              </div>
              <div className="flex-accidentals">
                <p>5 Flats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinorScales;
