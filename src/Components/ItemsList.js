import React from "react";
import UserInput from "./UserInput";
import Items from "./Items";

export default class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [],
    };
  }

  addItem = (inputValue) => {
    let newItem = { name: " ", key: " ", isChecked: false };
    newItem.name = inputValue;
    newItem.key = Date.now();
    let newItemsList = [...this.state.itemsList, newItem];
    this.setState({ itemsList: newItemsList });
  };

  deleteItem = (index) => {
    let itemsList = [...this.state.itemsList];
    itemsList.splice(index, 1);
    this.setState({ itemsList: itemsList });
  };
  updateItem = (name, key) => {
    this.state.itemsList.map((item) => {
      if (item.key === key) {
        item.name = name;
      }
      return <span>{item.name}</span>;
    });
    this.setState({ itemsList: this.state.itemsList });
  };

  checkItem = (key) => {
    this.state.itemsList.map((item) => {
      // if (item.key === key && !item.isChecked) {
      //   item.isChecked = true;
      //   console.log(item.isChecked);
      // } else if (item.key === key && item.isChecked) {
      //   item.isChecked = false;
      //   console.log(item.isChecked);
      // }
      if (item.key === key) {
        item.isChecked = !item.isChecked;
      }

      return <span>{item.name}</span>;
    });

    this.setState({ itemsList: this.state.itemsList });
  };

  render() {
    return (
      <div>
        <div>
          <UserInput addItem={this.addItem} />
        </div>
        <div>
          <Items
            itemsList={this.state.itemsList}
            checkItem={this.checkItem}
            updateItem={this.updateItem}
            deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}
//We need to be able to add items to the list
//Items are added in the UserInput component: when user inputs something into the input field and then clicks "add item" , the item should get added into the itemsArray
//Each item can be deleted
//Each item can be changed
//Each item can be edited
//Each item has checkbox, once the user got the item, they may tick the checkbox and the item will get crossed out
