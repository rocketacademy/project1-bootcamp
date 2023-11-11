import React from "react";
import UserInput from "./UserInput";
import { BsTrash3Fill } from "react-icons/bs";

export default class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [],
    };
  }
  addItem = (inputValue) => {
    let newItem = { name: " ", key: " " };
    newItem.name = inputValue;
    newItem.key = Date.now();
    let newItemsList = [...this.state.itemsList, newItem];
    this.setState({ itemsList: newItemsList });
  };

  deleteItem = (index) => {
    let itemsList = [...this.state.itemsList];
    console.log(itemsList);
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

  displayItemsList = () => {
    const itemsList = this.state.itemsList.map((item, key) => {
      return (
        <div key={item.key}>
          <input
            className="input"
            type="checkbox"
            name="item"
            value={item}
          ></input>
          <span>
            <input
              className="list"
              type="text"
              id={item.key}
              value={item.name}
              onChange={(event) =>
                this.updateItem(event.target.value, item.key)
              }
            ></input>
          </span>
          <span>
            <BsTrash3Fill
              className="icons"
              id="trashbin"
              onClick={() => this.deleteItem(key)}
            />
          </span>
        </div>
      );
    });
    return itemsList;
  };
  render() {
    return (
      <div>
        <div>
          <UserInput addItem={this.addItem} />
        </div>
        <div>{this.displayItemsList()}</div>
      </div>
    );
  }
}

//We need to be able to add items to the list
//Items are added in the UserInput component: when user inputs something into the input field and then clicks "add item" , the item should get added into the itemsArray
//Each item can be deleted
//Each item can be changed/edited.
