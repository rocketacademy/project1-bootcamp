import React from "react";
export default class UserInput extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputValue: "",
  //   };
  // }

  handleClick = () => {};
  render() {
    console.log(this.state.inputValue);
    return (
      <div>
        <input
          type="text"
          value={this.props.userInput}
          onChange={() => this.props.onChange()}
        />
        <button onClick={this.handleClick}>Add Item</button>
      </div>
    );
  }
}
