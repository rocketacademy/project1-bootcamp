import "./App.css";

const Basics = (props) => {
  return (
    <>
      <div className="basics-section" id="padding-container">
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
      </div>
    </>
  );
};

export default Basics;
