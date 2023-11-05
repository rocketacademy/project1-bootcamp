import React from "react";

class WeightInput extends React.Component {
  handleChange = (e) => {
    this.props.updateWeightInput(e.target.value);
  };

  render() {
    return (
      <div className="input-box">
        <form>
          <label>
            Weight
            <input
              type="text"
              name="weight-input"
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default WeightInput;
