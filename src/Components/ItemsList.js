import React from "react";
import UserInput from "./UserInput";

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
          <input type="checkbox" name="item" value={item}></input>
          <span>
            <input
              type="text"
              id={item.key}
              value={item.name}
              onChange={(event) =>
                this.updateItem(event.target.value, item.key)
              }
            ></input>
          </span>
          {/* <img
            id="edit_icon"
            // onClick={()=> ()}
            src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"
            alt="edit_icon"
          /> */}
          <img
            id="delete_icon"
            onClick={() => this.deleteItem(key)}
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            alt="delete_icon"
          />
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
