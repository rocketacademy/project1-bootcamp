import React from "react";

class WeightInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="input-box">
        <form>
          <label>
            Weight
            <input type="text" name="weight-input" />
          </label>
        </form>
      </div>
    );
  }
}

export default WeightInput;
