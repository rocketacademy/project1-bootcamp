import React from "react";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      amount: "",
      spenders: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value, checked } = e.target;
    this.setState({
      [name]: value,
    });

    if (checked) {
      const newSpenderList = [...this.state.spenders, value];
      this.setState({
        spenders: newSpenderList,
      });
    } else {
      this.setState({
        spenders: this.state.spenders.filter((e) => e !== value),
      });
    }
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
    let copyOfNameList = [...this.props.fullNameList];
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Item name:{" "}
            <input
              type="text"
              name="item"
              value={this.state.item}
              onChange={(e) => this.handleChange(e)}
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
              onChange={(e) => this.handleChange(e)}
              placeholder="Insert price"
            />
          </label>
          <br />
          Select spenders:
          <ul>
            {copyOfNameList.map((i) => (
              <li>
                <input
                  type="checkbox"
                  name={i}
                  value={i}
                  onChange={(e) => this.handleChange(e)}
                />
                {i}
              </li>
            ))}
          </ul>
          <br />
          <br />
          <input type="submit" value="Submit to create record" />
        </form>
      </div>
    );
  }
}
