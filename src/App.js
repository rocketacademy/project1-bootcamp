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
        {
          item: "Burger",
          amount: 4.2,
          spenders: ["patrick", "spongebob"],
        },
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
        <ExpenseForm action={this.addRecord} />
        <br />
        <GroupForm nameList={this.state.group} addName={this.addName} />
        <h2>Display all records of expenses here</h2>
        {listOfExpenses.map((entry) => (
          <DisplayExpense {...entry} />
        ))}
        <h2>Display complete group list</h2>
        {this.state.group.join(' ')}
        
      </div>
    );
  }
}

export default App;
