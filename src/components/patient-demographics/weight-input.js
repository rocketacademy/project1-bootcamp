import React from "react";

class WeightInput extends React.Component {
  handleChange = (e) => {
    this.props.updateWeightInput(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateWeightInput(e.target.value);
  };

  render() {
    return (
      <div className="input-box">
        <form onSubmit={this.handleSubmit}>
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
