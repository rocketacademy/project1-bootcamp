import React from "react";

export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // const inputValue = this.state;
    if (this.state.inputValue) {
      this.props.addItem(this.state.inputValue.toLowerCase());
      this.setState({
        inputValue: "",
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="main-input-field"
            type="text"
            placeholder="type in your item"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <input className="add-item-button" type="submit" value="Add Item" />
        </form>
      </div>
    );
  }
}
