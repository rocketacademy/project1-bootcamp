import React from "react";
// import logo from "./logo.png";
import "./App.css";
import DisplayExpense from "./components/DisplayExpense";
import ExpenseForm from "./components/ExpenseForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {
          item: "Burger",
          amount: 4.2,
          spenders: ["patrick", "spongebob"],
        },
      ],
    };
  }

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
        <h2>Display all expenses</h2>
        {listOfExpenses.map((entry) => (
          <DisplayExpense {...entry} />
        ))}
      </div>
    );
  }
}

export default App;
