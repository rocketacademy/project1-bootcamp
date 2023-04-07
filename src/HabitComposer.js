import React from "react";

class HabitComposer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.habitsLength,
      habit: "",
      upCount: 0,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        Enter a habit to track it:
        <p>
          <input
            name="habit"
            type="text"
            value={this.state.habit}
            onChange={this.handleChange}
          />
          <br />
          <input name="submit" type="submit" value="submit" />
        </p>
      </div>
    );
  }
}

export default HabitComposer;
