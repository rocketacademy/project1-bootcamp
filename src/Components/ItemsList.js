import React from "react";
import UserInput from "./ UserInput";
export default class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: ["banana", "papaya", "mango"],
    };
  }
  addItem = (inputValue) => {
    let newItemsList = [...this.state.itemsList, inputValue];
    this.setState({ itemsList: newItemsList });
  };
  render() {
    console.log(this.state.itemsList);
    const newArray = this.state.itemsList.map((item, index) => {
      return <p key={index}>{item}</p>;
    });

    return (
      <div>
        <div>
          <UserInput addItem={this.addItem} />
        </div>
        <div>{newArray}</div>
      </div>
    );
  }
}

//We need to be able to add items to the list
//Items are added in the UserInput component: when user inputs something into the input field and then clicks "add item" , the item should get added into the itemsArray

//1. Add itemsArray into the state in App.js
//2. Pass the itemsArray as props to
