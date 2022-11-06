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
      group: [],
      expenses: [
        // {
        //   item: "Burger",
        //   amount: 4.2,
        //   spenders: ["patrick", "spongebob"],
        // },
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

  addRecord = (record) => {
    let newArray = [...this.state.expenses, record];
    this.setState({
      expenses: newArray,
    });
  };

  splitBill = () => {
    let copyOfExpenses = [...this.state.expenses];
    console.log("copyofExpenses", copyOfExpenses);
    this.setState({
      billTally: calcSplitBill(copyOfExpenses),
    });
  };

  render() {
    let listOfExpenses = [...this.state.expenses];
    const showSplitBill = this.state.billTally;

    let txtBill = "";
    for (let x in showSplitBill) {
      //txtBill += x + " → " + showSplitBill[x] + " me\n";
      txtBill += `${x} → ${showSplitBill[x]} me <br>`;
    }

    return (
      <div>
        <h1>Step 1: Include all who owes you money</h1>
        <GroupForm nameList={this.state.group} addName={this.addName} />
        <br />
        <h1>Step 2: Enter item, price, and select list of spenders</h1>
        <ExpenseForm fullNameList={this.state.group} action={this.addRecord} />
        <br />
        <h2>Display all records of expenses here</h2>
        {listOfExpenses.map((entry, i) => (
          <DisplayExpense {...entry} key={i} />
        ))}
        <h2>Display complete group list</h2>
        {this.state.group.join(" ")}
        <h1>Step 3: Split the Bill</h1>
        <SplitBill action={this.splitBill} />
        <div>{txtBill}</div>
      </div>
    );
  }
}

export default App;
