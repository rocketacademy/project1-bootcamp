import React from "react";
import "./App.css";
import DisplayExpense from "./components/DisplayExpense";
import ExpenseForm from "./components/ExpenseForm";
import GroupForm from "./components/GroupForm";
import SplitBill from "./components/SplitBill";
import TrashBinIcon from "./components/TrashBinIcon";
import ReceiptDisplay from "./components/ReceiptDisplay";

const calcSplitBill = (expenseArray) => {
  const tally = {};
  for (let i = 0; i < expenseArray.length; i++) {
    let amountPayable =
      expenseArray[i]["amount"] / expenseArray[i]["spenders"].length;
    for (const spender of expenseArray[i]["spenders"]) {
      if (spender in tally) {
        tally[spender] += amountPayable;
      } else {
        tally[spender] = amountPayable;
      }
    }
  }
  return tally;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueNames: [],
      overallreceipt: {},
      group: ["anya", "bella", "cass", "darren"],
      expenses: [
        { item: "Burger 1", amount: 4.2, spenders: ["patrick", "spongebob"] },
        { item: "Burger 2", amount: 4.8, spenders: ["anya", "bella", "cass"] },
        {
          item: "Burger 3",
          amount: 9.6,
          spenders: ["patrick", "spongebob", "darren"],
        },
        { item: "Burger 4", amount: 4.2, spenders: ["anya", "spongebob"] },
        {
          item: "Burger 5",
          amount: 4.8,
          spenders: ["bella", "darren", "patrick", "spongebob"],
        },
        {
          item: "Burger 6",
          amount: 9.6,
          spenders: ["patrick", "spongebob", "bella"],
        },
        { item: "Burger 7", amount: 4.8, spenders: ["patrick", "anya"] },
        { item: "Burger 8", amount: 9.6, spenders: ["cass"] },
      ],
      billTally: "",
      hover: -1,
    };
  }

  addName = (name) => {
    let newGroup = [...this.state.group, name];
    this.setState({
      group: newGroup,
    });
  };

  deleteName = (name) => {
    let filteredGroup = this.state.group.filter((x) => x !== name);

    this.setState({
      group: filteredGroup,
    });
  };

  deleteRecord = (e) => {
    // e is the event, e.target is the button,
    let key = e.target.value;
    let newexpenses = [...this.state.expenses];
    newexpenses.splice(key, 1);
    this.setState({
      expenses: newexpenses,
    });
  };

  addRecord = (record) => {
    let newArray = [...this.state.expenses, record];
    this.setState({
      expenses: newArray,
    });
  };

  splitBill1 = () => {
    let copyOfExpenses = [...this.state.expenses];
    this.setState({
      billTally: calcSplitBill(copyOfExpenses),
    });
  };

  splitBill = () => {
    let expensesList = [...this.state.expenses];
    let fullList = [];
    for (let i = 0; i < expensesList.length; i++) {
      fullList = [...fullList, ...expensesList[i].spenders];
    }
    let uniqueNames = [...new Set(fullList)];

    let newReceipt = {};
    for (let k = 0; k < uniqueNames.length; k++) {
      var purchase = [];
      var cost = [];
      var initialValue = 0;
      for (let j = 0; j < expensesList.length; j++) {
        if (expensesList[j]["spenders"].includes(uniqueNames[k])) {
          purchase.push(expensesList[j]["item"]);
          cost.push(
            expensesList[j]["amount"] / expensesList[j]["spenders"].length
          );
        }

        var record = {
          purchases: purchase,
          costprice: cost,
          total: cost.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
          ),
        };
      }
      newReceipt[uniqueNames[k]] = record;
    }
    console.log(newReceipt);
    console.log(uniqueNames);
    this.setState(
      {
        overallreceipt: newReceipt,
        uniqueNames: uniqueNames,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onMouseEnter = (e) => {
    this.setState({ hover: e.target.value });
  };

  onMouseLeave = (e) => {
    console.log(e.target);
    this.setState({ hover: -1 });
  };

  render() {
    let copyGroup = [...this.state.group];
    let copyExpenses = [...this.state.expenses];
    const copyBillTally = this.state.billTally;

    let txtBill = [];
    for (let x in copyBillTally) {
      txtBill.push(`${x} → $${copyBillTally[x].toFixed(2)}`);
    }

    return (
      <div>
        <center>
          <h1 className="bangers">A Bill Splitting App</h1>
        </center>
        <div className="flex-container">
          <div className="container">
            <center>
              <h4 className="step">1. Add person</h4>
            </center>
            <GroupForm nameList={this.state.group} addName={this.addName} />
          </div>

          <div className="container two-width">
            <center>
              <h4 className="step">2. Add item</h4>
            </center>
            <ExpenseForm
              fullNameList={this.state.group}
              action={this.addRecord}
            />
          </div>

          <div className="container">
            <center>
              <h4 className="step">3. Pay Up!</h4>
            </center>
            <div>
              {/* {txtBill.map((entry) => (
                <div className="tooltip">
                  {entry}
                  <span className="tooltiptext">Insert text</span>
                </div>
              ))} */}
              {this.state.uniqueNames.map((name) => (
                <ReceiptDisplay
                  name={name}
                  receipt={this.state.overallreceipt[name]}
                />
              ))}
            </div>
            <SplitBill action={this.splitBill} />
            {/* {console.log("billtally", this.state.billTally)} */}
          </div>

          <div className="container">
            <center>
              <h4 className="step">Edit Group List</h4>
            </center>
            <div className="flex-container">
              {copyGroup.map((k, i) => (
                <div>
                  {k}{" "}
                  <button
                    className="bin-btn"
                    value={i}
                    onClick={() => this.deleteName(k)}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                  >
                    <TrashBinIcon value={i} hover={this.state.hover} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <div>
          <center>
            <h2 className="bangers">📜RECORDS OF EXPENSES📜</h2>
          </center>
          <div className="row">
            {copyExpenses.map((entry, i) => (
              <DisplayExpense
                {...entry}
                key={i}
                id={i}
                deleteRecord={this.deleteRecord}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
