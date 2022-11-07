import React from "react";
import "./App.css";
import DisplayExpense from "./components/DisplayExpense";
import ExpenseForm from "./components/ExpenseForm";
import GroupForm from "./components/GroupForm";
import SplitBill from "./components/SplitBill";

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
      group: ["anya", "bella", "cass", "darren", "patrick", "spongebob"],
      expenses: [
        { item: "Burger", amount: 4.2, spenders: ["patrick", "spongebob"] },
        { item: "Burger1", amount: 4.8, spenders: ["patrick", "spongebob"] },
        { item: "Burger2", amount: 9.6, spenders: ["patrick", "spongebob"] },
        { item: "Burger3", amount: 4.2, spenders: ["patrick", "spongebob"] },
        { item: "Burger4", amount: 4.8, spenders: ["patrick", "spongebob"] },
        { item: "Burger5", amount: 9.6, spenders: ["patrick", "spongebob"] },
        { item: "Burger6", amount: 4.8, spenders: ["patrick", "spongebob"] },
        { item: "Burger7", amount: 9.6, spenders: ["patrick", "spongebob"] },
      ],
      billTally: "",
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

  splitBill = () => {
    let copyOfExpenses = [...this.state.expenses];
    this.setState({
      billTally: calcSplitBill(copyOfExpenses),
    });
  };

  render() {
    let copyGroup = [...this.state.group];
    let listOfExpenses = [...this.state.expenses];
    const showSplitBill = this.state.billTally;

    let txtBill = [];
    for (let x in showSplitBill) {
      txtBill.push(`${x} → $${showSplitBill[x].toFixed(2)}`);
    }

    return (
      <div>
        <div className="flex-container">
          <div className="container">
            <center>
              <h4 className="step">Add person</h4>
            </center>
            <GroupForm nameList={this.state.group} addName={this.addName} />
          </div>

          <div className="container">
            <center>
              <h4 className="step">Add item</h4>
            </center>
            <ExpenseForm
              fullNameList={this.state.group}
              action={this.addRecord}
            />
          </div>

          <div className="container">
            <center>
              <h4 className="step">Pay Up!</h4>
            </center>
            <div>
              {txtBill.map((entry) => (
                <p>{entry}</p>
              ))}
            </div>
            <SplitBill action={this.splitBill} />
          </div>

          <div className="container">
            <center>
              <h4 className="step">Edit Group List</h4>
            </center>
            <div>
              {copyGroup.map((k) => (
                <p>
                  {k}{" "}
                  <button
                    className="bin-btn"
                    onClick={() => this.deleteName(k)}
                  >
                    <svg
                      className="trashcan"
                      x="0px"
                      y="0px"
                      viewBox="0 0 25 24.8"
                    >
                      <g>
                        <path
                          d="M6.8,8.8h11L17,22.6
             H7.6L6.8,8.8z 
             M4.9,7l1,17.4h12.8
             l1-17.4
             H4.9z"
                        ></path>
                        <polygon points="13.6,10.3 13.1,21.2 14.9,21.2 15.4,10.3 "></polygon>
                        <polygon points="11.5,21.2 11,10.3 9.2,10.3 9.7,21.2 "></polygon>
                        <path
                          d="M20.4,4h-4.8l-0.5-1.6
             H9.5L9,4
             H4.2
             L3.5,8.6h17.6
             L20.4,4z 
             
             M9.9,3.2h4.8
             L14.9,3.9h-5.2z
             
             M5.6,6.7l0.2-1 h13l0.2,1
             H5.6z"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </p>
              ))}
            </div>
          </div>
        </div>
        <br />
        <div>
          <center>
            <h2 className="bangers">ALL EXPENSES RECORDS</h2>
          </center>
          <div className="row">
            {listOfExpenses.map((entry, i) => (
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
