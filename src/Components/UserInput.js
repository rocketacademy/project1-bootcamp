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
    } else {
      alert("Please input the name of your item 😁");
    }
  };
  render() {
    console.log(this.state.inputValue);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Item" />
        </form>
      </div>
    );
  }
}
