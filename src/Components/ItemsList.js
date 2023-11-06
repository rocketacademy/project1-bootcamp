import React from "react";
import UserInput from "./UserInput";
// import DeleteItemButton from "./DeleteItemButton";
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

  deleteItem = (index) => {
    let itemsList = [...this.state.itemsList];
    console.log(itemsList);
    itemsList.splice(index, 1);
    this.setState({ itemsList: itemsList });
  };
  render() {
    console.log(this.state.itemsList);
    const newArray = this.state.itemsList.map((item, index) => {
      return (
        <p key={index}>
          <input type="checkbox" name="item" value={item}></input> {item}{" "}
          <button type="button">Edit</button>
          <button type="button" onClick={() => this.deleteItem(index)}>
            Delete
          </button>
        </p>
      );
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
