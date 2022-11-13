import React from "react";
import "./App.css";
import DisplayExpense from "./components/DisplayExpense";
import ExpenseForm from "./components/ExpenseForm";
import GroupForm from "./components/GroupForm";
import SplitBill from "./components/SplitBill";
import TrashBinIcon from "./components/TrashBinIcon";
import ReceiptDisplay from "./components/ReceiptDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueNames: [],
      overallReceipt: {},
      group: [],
      expenses: [],
      hover: -1,
    };
  }

  componentDidMount() {
    let state = localStorage.getItem("state");
    state = JSON.parse(state);
    this.setState(state);
  }

  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
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
    // deleteRecord takes in a parameter (like addName or deleteName)
    // e is the event, e.target is the button, the value in e.target.value is defined in Line 38 of dispay expense which takes its value from the id which is an index.
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

  clearRecords = () => {
    this.setState({
      expenses: [],
    });
  };

  splitBill = () => {
    let expensesList = [...this.state.expenses];
    let spenderList = [];
    for (let i = 0; i < expensesList.length; i++) {
      spenderList = [...spenderList, ...expensesList[i].spenders];
    }
    let uniqueNames = [...new Set(spenderList)];

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
    console.log("this.state.newReceipt", newReceipt);
    console.log("this.state.uniqueNames", uniqueNames);
    this.setState({
      overallReceipt: newReceipt,
      uniqueNames: uniqueNames,
    });
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
    let copyUniqueNames = [...this.state.uniqueNames];
    let sortUniqueNames = copyUniqueNames.sort();
    let copyOverallReceipt = this.state.overallReceipt;

    return (
      <div>
        <center>
          <h1 className="bangers">Split ⚡ My ⚡ Bill</h1>
        </center>
        <div className="flex-container">
          <div className="green-container">
            <center>
              <h4 className="step">1. Add person</h4>
            </center>
            <GroupForm nameList={this.state.group} addName={this.addName} />
          </div>

          <div className="green-container">
            <center>
              <h4 className="step">2. Add item</h4>
            </center>
            <ExpenseForm
              fullNameList={this.state.group}
              action={this.addRecord}
            />
          </div>

          <div className="green-container">
            <center>
              <h4 className="step">3. View Receipt</h4>
            </center>
            <div className="flex-receipt">
              {sortUniqueNames.map((name) => (
                <ReceiptDisplay
                  name={name}
                  receipt={copyOverallReceipt[name]}
                />
              ))}
            </div>
            <SplitBill
              uniqueName={this.state.uniqueNames}
              action={this.splitBill}
            />
          </div>

          <div className="green-container">
            <center>
              <h4 className="step">4. Edit Group List</h4>
            </center>
            <div className="flex-grouplist">
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
            {this.state.expenses.length > 0 && (
              <h2 className="bangers">📜RECORDS OF EXPENSES📜</h2>
            )}
          </center>
          <div className="row-flex">
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
        <br />
        {this.state.expenses.length > 0 && (
          <center>
            <button onClick={this.clearRecords}>Clear all</button>
          </center>
        )}
      </div>
    );
  }
}

export default App;
