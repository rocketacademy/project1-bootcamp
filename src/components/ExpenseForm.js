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
              placeholder="Insert price"
            />
          </label>
          <br />
          <h4>Select spenders:</h4>
          <ul>
            {copyOfNameList.map((i) => (
              <li>
                <label>
                  {" "}
                  {i}
                  <input type="checkbox" value={i} name={i} />
                </label>
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
