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
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleChangeCheckBox = (e) => {
    const { checked, value } = e.target;

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

    if (this.state.spenders.length < 1) {
      alert("Please select spender field");
      return;
    }

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
              required
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
              required
              onChange={(e) => this.handleChange(e)}
              pattern="^\d*(\.\d{0,2})?$"
              placeholder="Insert price up to 2 d.p."
            />
          </label>
          <br />
          Select spenders:
          {copyOfNameList.map((name, i) => (
            <div key={i}>
              <input
                type="checkbox"
                name={name}
                value={name}
                onChange={(e) => this.handleChangeCheckBox(e)}
              />
              {name}
            </div>
          ))}
          <br />
          <br />
          <input type="submit" value="Submit to create record" />
        </form>
      </div>
    );
  }
}
