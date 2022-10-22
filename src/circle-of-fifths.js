import "./App.css";
import ScrollToTop from "./components/scrollToTop";

const CircleOfFifths = () => {
  return (
    <>
      <div className="padding-container" id="circle-of-fifths-section">
        <div className="container-flex">
          <div className="title">Circle of Fifths</div>
          <p id="text-align-left">
            In music theory, the circle of fifths is a way of organizing the 12
            chromatic pitches as a sequence of perfect fifths.
          </p>

          <p id="text-align-left">
            Because key signatures can get a little tricky to remember, the
            circle of fifths is a great tool! Let's look at how the key
            signatures coordinate with the circle of fifths below:
          </p>
          <ul className="circle-pointers">
            <li>C Major and A Minor have no sharps and no flats</li>
            <li>G Major and E Minor have 1 sharp</li>
            <li>D Major and B Minor have 2 sharps</li>
            <li>A Major and F# Minor have 3 sharps</li>
            <li>and so on…</li>
          </ul>
        </div>
        <div>
          <img src={require(`../src/assets/circle-fifths1.png`)} alt="" />
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default CircleOfFifths;
