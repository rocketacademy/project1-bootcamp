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
            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">C:</button>
              </div>
              <div className="flex-text">
                <p>C D E F G A B C</p>
              </div>
              <div className="flex-accidentals">
                <p>nil</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">D:</button>
              </div>
              <div className="flex-text">
                <p>C D E F G A B C</p>
              </div>
              <div className="flex-accidentals">
                <p>2 Sharps</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">E:</button>
              </div>
              <div className="flex-text">
                <p>E F# G# A B C# D# E</p>
              </div>
              <div className="flex-accidentals">
                <p>4 Sharps</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">F:</button>
              </div>
              <div className="flex-text">
                <p>F G A Bb C D E F</p>
              </div>
              <div className="flex-accidentals">
                <p>1 Flat</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">G:</button>
              </div>
              <div className="flex-text">
                <p>G A B C D E F# G</p>
              </div>
              <div className="flex-accidentals">
                <p>1 Sharp</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">A:</button>
              </div>
              <div className="flex-text">
                <p>A B C# D E F# G# A</p>
              </div>
              <div className="flex-accidentals">
                <p>3 Sharps</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">B:</button>
              </div>
              <div className="flex-text">
                <p>B C# D# E F# G# A# B</p>
              </div>
              <div className="flex-accidentals">
                <p>5 Sharps</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">F#:</button>
              </div>
              <div className="flex-text">
                <p>F# G# A# B C# D# F F#</p>
              </div>
              <div className="flex-accidentals">
                <p>6 Sharps</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Db:</button>
              </div>
              <div className="flex-text">
                <p>Db Eb F Gb Ab Bb C Db</p>
              </div>
              <div className="flex-accidentals">
                <p>5 Flats</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Ab:</button>
              </div>
              <div className="flex-text">
                <p>Ab Bb C Db Eb F G Ab</p>
              </div>
              <div className="flex-accidentals">
                <p>5 Flats</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Eb:</button>
              </div>
              <div className="flex-text">
                <p>Eb F G Ab Bb C D Eb</p>
              </div>
              <div className="flex-accidentals">
                <p>4 Flats</p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button className="note-button">Bb:</button>
              </div>
              <div className="flex-text">
                <p>Bb C D Eb F G A Bb</p>
              </div>
              <div className="flex-accidentals">
                <p>3 Flats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MajorScales;
