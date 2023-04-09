import React from "react";

class Habit extends React.Component {
  render() {
    return (
      <div className="Habit">
        <h6>Habit: {this.props.habit}</h6>
        <button onClick={() => this.props.onUpcount(this.props.id)}>+</button>
        <h6>Counter: {this.props.upCount}</h6>
        <button onClick={() => this.props.onDelete(this.props.id)}>
          Delete Habit
        </button>
      </div>
    );
  }
}

export default Habit;
