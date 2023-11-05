import React from "react";

class AgeInput extends React.Component {
  handleChange = (e) => {
    this.props.updateAgeInput(e.target.value);
  };

  render() {
    return (
      <div className="input-box">
        <form>
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
