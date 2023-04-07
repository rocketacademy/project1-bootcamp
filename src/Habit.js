import React from "react";

class Habit extends React.Component {
  render() {
    return (
      <div>
        <h4>Habit: {this.props.habit}</h4>
        <h5>Counter: {this.props.upCount}</h5>
        <button onClick={() => this.props.onUpcount(this.props.id)}>+</button>
      </div>
    );
  }
}

export default Habit;
