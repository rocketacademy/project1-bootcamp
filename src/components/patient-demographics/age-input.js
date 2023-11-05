import React from "react";

class AgeInput extends React.Component {
  handleChange = (e) => {
    this.props.updateAgeInput(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateAgeInput(e.target.value);
  };

  render() {
    return (
      <div className="input-box">
        <form onSubmit={this.handleSubmit}>
          <label>
            Age
            <input type="text" name="age-input" onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default AgeInput;
