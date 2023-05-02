import React from "react";
// import IngredientItems from "./ingredientsList";

export class IngredientList extends React.Component {
  constructor(props) {
    super(props);
    // State with list of all checked item
    this.state = {
      checked: [],
      checkList: ["Apple", "Banana", "Tea", "Coffee"],
    };
  }

  // Add/Remove checked item from list
  handleCheck = (event) => {
    var updatedList = [...this.state.checked];
    if (event.target.checked) {
      updatedList = [...this.state.checked, event.target.value];
    } else {
      updatedList.splice(this.state.checked.indexOf(event.target.value), 1);
    }
    this.setState({ checked: updatedList });
  };

  // Generate string of checked items
  checkedItems = () => {
    return this.state.checked.length
      ? this.state.checked.reduce((total, item) => {
          return total + ", " + item;
        })
      : "";
  };

  // Return classes based on whether item is checked
  isChecked = (item) =>
    this.state.checked.includes(item) ? "checked-item" : "not-checked-item";

  render() {
    return (
      <div>
        <h2>This is the ingredients list page</h2>
        <div className="checkList">
          <div className="title">Check off what you have in your fridge:</div>
          <div className="list-container">
            {this.state.checkList.map((item, index) => (
              <div key={index}>
                <input
                  value={item}
                  type="checkbox"
                  onChange={this.handleCheck}
                />
                <span className={this.isChecked(item)}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>{`You have these in your fridge: ${this.checkedItems()}`}</div>
      </div>
    );
  }
}
