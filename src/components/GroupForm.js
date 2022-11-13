import React from "react";

export default class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleUserInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name) {
      return;
    }

    const newName = this.state.name.toLowerCase();

    if (this.props.nameList.includes(newName)) {
      this.setState({
        name: "",
      });
    } else {
      this.props.addName(newName);
      this.setState({
        name: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="Enter Person Name"
            maxLength={15}
            onChange={this.handleUserInput}
            value={this.state.name}
          />
          <br />
          <br />
          <center>
            <input className="white-btn" type="submit" value="ADD" />
          </center>
        </form>
      </div>
    );
  }
}
