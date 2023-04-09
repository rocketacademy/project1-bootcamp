import React from "react";

class Habit extends React.Component {
  render() {
    return (
      <div>
        <h4>Habit: {this.props.habit}</h4>
        <button onClick={() => this.props.onUpcount(this.props.id)}>+</button>
        <h5>Counter: {this.props.upCount}</h5>
        <button onClick={() => this.props.onDelete(this.props.id)}>
          Delete Habit
        </button>
      </div>
    );
  }
}

export default Habit;
