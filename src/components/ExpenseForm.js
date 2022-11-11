import React from "react";

const calcGST = (price) => {
  let output = (price * 1.07).toFixed(2);
  return output;
};

const calcSvcChrg = (price) => {
  let output = (price * 1.1).toFixed(2);
  return output;
};

const calcGstSc = (price) => {
  let output = (price * 1.1 * 1.07).toFixed(2);
  return output;
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      amount: "",
      spenders: [],
      start: true,
      taxOption: "notax",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taxOption") {
      let baseprice = this.state.amount;

      if (this.state.taxOption === "gst") {
        baseprice = baseprice / 1.07;
      } else if (this.state.taxOption === "sc") {
        baseprice = baseprice / 1.1;
      } else if (this.state.taxOption === "gstsc") {
        baseprice = baseprice / 1.177;
      }

      if (value === "gst") {
        this.setState({
          amount: calcGST(baseprice),
        });
      } else if (value === "sc") {
        this.setState({
          amount: calcSvcChrg(baseprice),
        });
      } else if (value === "gstsc") {
        this.setState({
          amount: calcGstSc(baseprice),
        });
      } else {
        this.setState({
          amount: baseprice.toFixed(2),
        });
      }
    }
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
      taxOption: "notax",
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
            maxLength={24}
            value={this.state.item}
            required
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter Item Name"
          />
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

          <div className="flex-tax">
            <label>
              <input
                type="radio"
                name="taxOption"
                value="notax"
                checked={this.state.taxOption === "notax"}
                onChange={(e) => this.handleChange(e)}
              />
              no tax
            </label>

            <label>
              <input
                type="radio"
                name="taxOption"
                value="gst"
                checked={this.state.taxOption === "gst"}
                onChange={(e) => this.handleChange(e)}
              />
              7% gst
            </label>

            <label>
              <input
                type="radio"
                name="taxOption"
                value="sc"
                checked={this.state.taxOption === "sc"}
                onChange={(e) => this.handleChange(e)}
              />
              10% svc
            </label>

            <label>
              <input
                type="radio"
                name="taxOption"
                value="gstsc"
                checked={this.state.taxOption === "gstsc"}
                onChange={(e) => this.handleChange(e)}
              />
              gst + svc
            </label>
          </div>

          <br />
          <br />
          <b>
            <span style={{ color: "#ffc312" }}>
              <u>Split amongst:</u>
            </span>
          </b>
          <br />
          <br />
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
          <center>
            <input className="white-btn" type="submit" value="SUBMIT" />
          </center>
        </form>
      </div>
    );
  }
}
