import React from "react";
// import logo from "./logo.png";
import "./App.css";
import DisplayExpense from "./components/DisplayExpense";
import ExpenseForm from "./components/ExpenseForm";
import GroupForm from "./components/GroupForm";

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

  render() {
    let listOfExpenses = [...this.state.expenses];
    return (
      <div>
        <h1>Step 1: Include all who borrowed money</h1>
        <GroupForm nameList={this.state.group} addName={this.addName} />
        <br />
        <h1>Step 2: Enter item, amount, and select list of spenders</h1>
        <ExpenseForm fullNameList={this.state.group} action={this.addRecord} />
        <br />
        <h2>Display all records of expenses here</h2>
        {listOfExpenses.map((entry) => (
          <DisplayExpense {...entry} />
        ))}
        {console.log(this.state.expenses)}
        <h2>Display complete group list</h2>
        {this.state.group.join(" ")}
      </div>
    );
  }
}

export default App;
