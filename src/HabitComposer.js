import React from "react";
import shiaGif from "./ShiaLeBoufGif.gif";

class HabitComposer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.habitsID,
      habit: "",
      upCount: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const habit = this.state;
    this.props.addNewHabit(habit);

    alert("You added a new habit:  " + this.state.habit + ". CARPE DIEM!");

    this.setState({
      id: this.props.habitsID,
      habit: "",
      upCount: 0,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="HabitComposer">
        <img src={shiaGif} alt="shia-gif" />
        <br />
        <form onSubmit={this.handleSubmit}>
          Enter a habit to track it:
          <p>
            <input
              name="habit"
              type="text"
              value={this.state.habit}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input name="submit" type="submit" value="submit" />
          </p>
        </form>
      </div>
    );
  }
}

export default HabitComposer;
