import React from "react";
import { BsTrash3Fill } from "react-icons/bs";
export default class Items extends React.Component {
  render() {
    const items = this.props.itemsList.map((item, key) => {
      return (
        <div key={item.key}>
          <input
            className="input"
            type="checkbox"
            id={item.key}
            value={item.isChecked}
            onChange={() => this.props.checkItem(item.key)}
          ></input>
          <span>
            <input
              className={item.isChecked ? "purchased-items" : "items-to-buy"}
              type="text"
              id={item.key}
              value={item.name}
              onChange={(event) =>
                this.props.updateItem(event.target.value, item.key)
              }
            ></input>
          </span>
          <span>
            <BsTrash3Fill
              className="icons"
              id="trashbin"
              onClick={() => this.props.deleteItem(this.props.key)}
            />
          </span>
        </div>
      );
    });
    console.log(this.props.itemsList);
    return <div>{items}</div>;
  }
}
