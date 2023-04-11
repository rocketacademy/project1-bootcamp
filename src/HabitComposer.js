import React from "react";
import Button from "@mui/material/Button";

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
        <img src="https://imgur.com/a/cGF2WNA" alt="shia-gif" />
        <br />
        <form onSubmit={this.handleSubmit}>
          Enter a habit to track it: <br />
          <input
            name="habit"
            type="text"
            value={this.state.habit}
            onChange={this.handleChange}
          />
          <br />
          <Button
            variant="contained"
            type="submit"
            size="small"
            color="secondary"
            sx={{
              borderRadius: 2,
              fontSize: "13px",
              mt: 1,
            }}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}

export default HabitComposer;
