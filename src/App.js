import React from "react";
import "./App.css";
import Habit from "./Habit";
import HabitComposer from "./HabitComposer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [
        {
          id: 0,
          habit: "Exercise everyday",
          upCount: 0,
        },
      ],
    };
  }

  addNewHabit = (habit) => {
    const highestId = Math.max(...this.state.habits.map((h) => h.id));
    console.log(highestId);
    let newHabit = { ...habit, id: highestId };
    if (highestId === -Infinity) {
      newHabit = { ...habit, id: 0 };
    } else if (this.state.habits.length > 0) {
      newHabit = { ...habit, id: highestId + 1 };
    }

    console.log(newHabit);

    this.setState({
      habits: [...this.state.habits, newHabit],
    });
  };

  handleUpcount = (id) => {
    const index = this.state.habits.findIndex((habit) => habit.id === id);
    const habit = this.state.habits.filter((habit) => habit.id === id)[0];
    habit.upCount += 1;

    const newArray = [...this.state.habits];
    newArray.splice(index, 1, habit);
    this.setState({ habits: newArray });
  };

  handleDelete = (id) => {
    const index = this.state.habits.findIndex((habit) => habit.id === id);
    const newArray = [...this.state.habits];
    newArray.splice(index, 1);
    newArray.forEach((habit, index) => {
      habit.id = index;
    });
    this.setState({ habits: newArray });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            We are the sum of our actions, therefore our habits make all the
            difference.
          </h2>
          <h2>-Aristotle</h2>
          <HabitComposer
            addNewHabit={this.addNewHabit}
            habitsID={this.props.id}
          />
          {this.state.habits && this.state.habits.length > 0 ? (
            this.state.habits.map((habit) => (
              <Habit
                key={habit.id}
                {...habit}
                onUpcount={this.handleUpcount}
                onDelete={this.handleDelete}
              />
            ))
          ) : (
            <p>Track your habits today!</p>
          )}
        </header>
      </div>
    );
  }
}

export default App;
