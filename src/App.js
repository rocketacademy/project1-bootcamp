import React from "react";
import "./App.css";
import { useState } from "react";
import NavHeader from "./elements/nav-header";
import about from "./elements/about";
// import "./elements/nav-header.js"

const HomePage = (props) => {
  return (
    <>
      <div className="Home-container">
        <div className="Home-hero">
          <p>welcome to</p>
          <h1>scales for dummies like me</h1>
        </div>
        <div>
          <button onClick={() => props.setPageNumber(2)}>
            Start Learning ♫
          </button>
        </div>

        <div className="About-container">
          <div>
            <button>about</button>
          </div>
        </div>
      </div>
    </>
  );
};

const Basics = (props) => {
  return (
    <>
      {/* <NavHeader /> */}
      <div>
        <h1>What are scales?</h1>
        <p>
          In music theory, a scale is any set of musical notes ordered by
          fundamental frequency or pitch. A scale ordered by increasing pitch is
          an ascending scale, and a scale ordered by decreasing pitch is a
          descending scale.
        </p>
        <p>
          Fundamentally, scales are pattern and intervals that consist of whole steps and half
          steps.
        </p>
      </div>

      <div className="Whole-half-step-container">
        <div className="Whole-step-wrapper">
          <div>
            <img src={require(`../src/images/whole-step1.png`)} />
            <img src={require(`../src/images/whole-step2.png`)} />
          </div>
          <div></div>
        </div>
        <div>
          <img src={require(`../src/images/half-step.png`)} />
        </div>
      </div>

      <div>
        <button onClick={() => props.setPageNumber(1)}>Prev Page</button>
        <button onClick={() => props.setPageNumber(3)}>Next Page</button>
      </div>
    </>
  );
};

const Intervals = (props) => {
  return (
    <>
      {/* <NavHeader /> */}
      <div>
        <h1>Intervals</h1>
        <p>Whole - W</p>
        <p>Half - H</p>
        <h2>C: C D E F G A B C</h2>
        <div>
          <img src={require(`../src/images/c-major.png`)} />
        </div>
        <h2>E: E F# G# A B C# D# E</h2>
        <div>
          <img src={require(`../src/images/e-major.png`)} />
        </div>
        <button onClick={() => props.setPageNumber(2)}>Prev Page</button>
        <button onClick={() => props.setPageNumber(4)}>Next Page</button>
      </div>
    </>
  );
};

const MajorScales = (props) => {
  return (
    <>
      {/* <NavHeader /> */}
      <table>
        <thread>
          <tr>
            <th>Major Scales</th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <td>
              <h6>W W H W W W H</h6>
            </td>
            <td></td>
            <td>
              <h6>Accidentals</h6>
            </td>
          </tr>
          <tr>
            <td className="key">
              <h4>C:</h4>
            </td>
            <td>
              <p>C D E F G A B C</p>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="key">
              <h4>D:</h4>
            </td>
            <td>
              <p>D E F# G A B C# D</p>
            </td>
            <td>2 Sharps</td>
          </tr>
          <tr>
            <td className="key">
              <h4>E:</h4>
            </td>
            <td>
              <p>E F# G# A B C# D# E</p>
            </td>
            <td>4 Sharps</td>
          </tr>
          <tr>
            <td className="key">
              <h4>F:</h4>
            </td>
            <td>
              <p>F G A Bb C D E F</p>
            </td>
            <td>1 Flat</td>
          </tr>
          <tr>
            <td className="key">
              <h4>G:</h4>
            </td>
            <td>
              <p>G A B C D E F# G</p>
            </td>
            <td>1 Sharp</td>
          </tr>
          <tr>
            <td className="key">
              <h4>A:</h4>
            </td>
            <td>
              <p>A B C# D E F# G# A</p>
            </td>
            <td>3 Sharps</td>
          </tr>
          <tr>
            <td className="key">
              <h4>B:</h4>
            </td>
            <td>
              <p>B C# D# E F# G# A# B</p>
            </td>
            <td>5 Sharps</td>
          </tr>
          <tr>
            <td className="key">
              <h4>F#:</h4>
            </td>
            <td>
              <p>F# G# A# B C# D# F F#</p>
            </td>
            <td>6 Sharps</td>
          </tr>
          <tr>
            <td className="key">
              <h4>Db:</h4>
            </td>
            <td>
              <p>Db Eb F Gb Ab Bb C Db</p>
            </td>
            <td>5 Flats</td>
          </tr>
          <tr>
            <td className="key">
              <h4>Ab:</h4>
            </td>
            <td>
              <p>Ab Bb C Db Eb F G Ab</p>
            </td>
            <td>5 Flats</td>
          </tr>
          <tr>
            <td className="key">
              <h4>Eb:</h4>
            </td>
            <td>
              <p>Eb F G Ab Bb C D Eb</p>
            </td>
            <td>4 Flats</td>
          </tr>
          <tr>
            <td className="key">
              <h4>Bb:</h4>
            </td>
            <td>
              <p>Bb C D Eb F G A Bb</p>
            </td>
            <td>3 Flats</td>
          </tr>
        </tbody>
      </table>

      <div>
        <button onClick={() => props.setPageNumber(3)}>Prev Page</button>
        <button onClick={() => props.setPageNumber(5)}>Next Page</button>
      </div>
    </>
  );
};

const MinorScales = (props) => {
  return (
    <>
      {/* <NavHeader /> */}
      <table>
        <thread>
          <tr>
            <th>Minor Scales</th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <td>
              <h6>W H W W H W W</h6>
            </td>
            <td></td>
            <td>
              <h6>Accidentals</h6>
            </td>
          </tr>
          <tr>
            <td className="key">
              <h4>Am:</h4>
            </td>
            <td>
              <p>A B C D E F G A</p>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="key">
              <h4>Bm:</h4>
            </td>
            <td>
              <p>B C# D E F# G A B</p>
            </td>
            <td>2 Sharps</td>
          </tr>
          <tr>
            <td className="key">
              <h4>Cm:</h4>
            </td>
            <td>
              <p>C D Eb F G Ab Bb C</p>
            </td>
            <td>3 Flats</td>
          </tr>
          <tr>
            <td className="key">
              <h4>Dm:</h4>
            </td>
            <td>
              <p>D E F G A Bb C D</p>
            </td>
            <td>1 Flat</td>
          </tr>
          <tr>
            <td className="key">
              <h4>Em:</h4>
            </td>
            <td>
              <p>E F# G A B C D E</p>
            </td>
            <td>1 Sharp</td>
          </tr>
          <tr>
            <td className="key">
              <h4>Fm:</h4>
            </td>
            <td>
              <p>F G Ab Bb C Db Eb F</p>
            </td>
            <td>4 Flats</td>
          </tr>
          <tr>
            <td className="key">
              <h4>Gm:</h4>
            </td>
            <td>
              <p>G A Bb C D Eb F G</p>
            </td>
            <td>2 Flats</td>
          </tr>
          <tr>
            <td className="key">
              <h4>C#m:</h4>
            </td>
            <td>
              <p>C# D# E F# G# A B C#</p>
            </td>
            <td>5 Sharps</td>
          </tr>
          <tr>
            <td className="key">
              <h4>D#m:</h4>
            </td>
            <td>
              <p>D# F F# G# A# B C# D#</p>
            </td>
            <td>6 Sharps</td>
          </tr>
          <tr>
            <td className="key">
              <h4>F#m:</h4>
            </td>
            <td>
              <p>F# G# A B C# D E F#</p>
            </td>
            <td>4 Sharps</td>
          </tr>
          <tr>
            <td className="key">
              <h4>G#m:</h4>
            </td>
            <td>
              <p>G# A# B C# D# E F# G#</p>
            </td>
            <td>6 Sharps</td>
          </tr>
          <tr>
            <td className="key">
              <h4>Bbm:</h4>
            </td>
            <td>
              <p>Bb C Db Eb F Gb Ab Bb</p>
            </td>
            <td>5 Flats</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={() => props.setPageNumber(4)}>Prev Page</button>
        <button onClick={() => props.setPageNumber(6)}>Next Page</button>
      </div>
    </>
  );
};

const CircleOfFifths = (props) => {
  return (
    <>
      {/* <NavHeader /> */}
      <div>
        <h1>Circle of Fifths</h1>
        <p>
          Lorem ipsum dolor sit amet. Ea sunt labore necessitatibus perferendis
          et ipsum optio. Vel quia magni sed velit recusandae ut quisquam
          architecto est repellat repudiandae id suscipit autem ut iure amet. Et
          adipisci aspernatur et perspiciatis natus et laboriosam eius?
        </p>
      </div>
      <div>
        <img src={require(`../src/images/circle-fifths1.png`)} />
      </div>
      <div>
        <button>major scales</button>
        <button>minor scales</button>
      </div>
      <div>
        <button onClick={() => props.setPageNumber(5)}>Prev Page</button>
      </div>
    </>
  );
};

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="App">
      {pageNumber === 1 && <HomePage setPageNumber={setPageNumber} />}
      {pageNumber === 2 && <Basics setPageNumber={setPageNumber} />}
      {pageNumber === 3 && <Intervals setPageNumber={setPageNumber} />}
      {pageNumber === 4 && <MajorScales setPageNumber={setPageNumber} />}
      {pageNumber === 5 && <MinorScales setPageNumber={setPageNumber} />}
      {pageNumber === 6 && <CircleOfFifths setPageNumber={setPageNumber} />}
    </div>
  );
}

export default App;
