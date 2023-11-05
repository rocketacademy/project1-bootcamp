import React from "react";

class AgeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="input-box">
        <form>
          <label>
            Age
            <input type="text" name="age-input" />
          </label>
        </form>
      </div>
    );
  }
}

export default AgeInput;
