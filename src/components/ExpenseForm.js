import React from "react";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      amount: "",
      spenders: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const record = this.state;
    this.props.action(record);
    this.setState({
      item: "",
      amount: "",
      spenders: [],
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Item name:{" "}
            <input
              type="text"
              name="item"
              value={this.state.item}
              onChange={this.handleChange}
              placeholder="Insert name of purchase"
            />
          </label>
          <br />
          <label>
            Amount:{" "}
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              placeholder="Insert amount"
            />
          </label>
          <br />
          <label>
            Spenders:{" "}
            <input
              type="text"
              name="spenders"
              value={this.state.spenders}
              onChange={this.handleChange}
              placeholder="Insert name of spenders"
            />
          </label>
          <br />
          <input type="submit" value="Submit to create record" />
        </form>
      </div>
    );
  }
}
