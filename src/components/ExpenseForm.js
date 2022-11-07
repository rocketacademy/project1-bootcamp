import React from "react";
import "./Forms.css";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      amount: "",
      spenders: [],
      start: true,
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
        start: false,
      });
    } else {
      this.setState({
        spenders: this.state.spenders.filter((e) => e !== value),
        start: false,
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
      start: true,
    });
  };

  render() {
    let copyOfNameList = [...this.props.fullNameList];
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input-field"
            type="text"
            name="item"
            value={this.state.item}
            required
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter Item Name"
          />
          <br />
          <input
            className="input-field"
            type="text"
            name="amount"
            value={this.state.amount}
            required
            onChange={(e) => this.handleChange(e)}
            pattern="^\d*(\.\d{0,2})?$"
            placeholder="Enter Price (Up 2 d.p.)"
          />
          <br />
          <br />
          Split amongst:
          <div className="flex-spender">
            {copyOfNameList.map((name, i) => (
              <div key={i}>
                {this.state.start ? (
                  <input
                    type="checkbox"
                    name={name}
                    value={name}
                    checked={false}
                    onChange={(e) => this.handleChangeCheckBox(e)}
                  />
                ) : (
                  <input
                    type="checkbox"
                    name={name}
                    value={name}
                    onChange={(e) => this.handleChangeCheckBox(e)}
                  />
                )}
                {name}
              </div>
            ))}{" "}
          </div>
          <br />
          <br />
          <input className="btn" type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}
