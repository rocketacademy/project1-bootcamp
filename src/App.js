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

  splitBill = () => {
    let copyOfExpenses = [...this.state.expenses];
    this.setState({
      billTally: calcSplitBill(copyOfExpenses),
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
    let listOfExpenses = [...this.state.expenses];
    const showSplitBill = this.state.billTally;

    let txtBill = [];
    for (let x in showSplitBill) {
      txtBill.push(`${x} → $${showSplitBill[x].toFixed(2)}`);
    }

    const allSpenders = () => {
      let fullList = [];
      for (let i = 0; i < listOfExpenses.length; i++) {
        fullList = [...fullList, ...listOfExpenses[i].spenders];
      }
      let uniqueList = [...new Set(fullList)];
      return uniqueList;
    };

    const uniqueNames = allSpenders();

    const makeReceipt = () => {
      let newReceipt = [];
      for (let k = 0; k < uniqueNames.length; k++) {
        var purchase = [];
        var cost = [];
        for (let j = 0; j < listOfExpenses.length; j++) {
          if (listOfExpenses[j]["spenders"].includes(uniqueNames[k])) {
            purchase.push(listOfExpenses[j]["item"]);
            cost.push(
              listOfExpenses[j]["amount"] / listOfExpenses[j]["spenders"].length
            );
          }

          var record = {
            name: uniqueNames[k],
            purchases: purchase,
            costprice: cost,
          };
        }
        newReceipt.push(record);
      }
      return newReceipt;
    };

    const receipt = makeReceipt();

    const showBreakdown = (input) => {
      var output = input;
      for (let z = 0; z < receipt.length; z++) {
        if (receipt[z].name === input) {
          for (let t = 0; t < receipt[z]["purchases"].length; t++) {
            output += `<br> ${receipt[z]["purchases"][t]} -- ${receipt[z]["costprice"][t]}`;
          }
        }
      }
      return output;
    };

    return (
      <div>
        <center>
          <h1 className="bangers">A Bill Splitting App</h1>
        </center>
        <div className="flex-container">
          <div className="container">
            <center>
              <h4 className="step">Add person</h4>
            </center>
            <GroupForm nameList={this.state.group} addName={this.addName} />
          </div>

          <div className="container two-width">
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
                <div className="tooltip">
                  {entry}
                  <span className="tooltiptext">Insert text</span>
                </div>
              ))}
            </div>
            <SplitBill action={this.splitBill} />
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
                    <svg
                      className="trashcan"
                      x="0px"
                      y="0px"
                      viewBox="0 0 25 24.8"
                    >
                      {Number(this.state.hover) === i ? (
                        <g className="trashcan-open" value={i}>
                          <path
                            d="M18.7,24.4H5.9L4.9,7h14.9L18.7,24.4z M7.6,22.6H17l0.8-13.7h-11L7.6,22.6z"
                            value={i}
                          ></path>
                          <polygon
                            points="13.6,10.3 13.1,21.2 14.9,21.2 15.4,10.3 "
                            value={i}
                          ></polygon>
                          <polygon
                            points="11.5,21.2 11,10.3 9.2,10.3 9.7,21.2 "
                            value={i}
                          ></polygon>
                          <path
                            d="M19.1,0.7l-4.7,0.9l-0.8-1.4L8.2,1.3L8,3l-4.7,1l0.2,4.7l17.3-3.5L19.1,0.7z 
             
             M8.8,1.9l4.4 -1.0 l0.5,0.8
             L8.7,2.8z 
             
             M5.2,6.4l0-1L18,2.8l0.3,0.9L5.2,6.4z"
                            value={i}
                          ></path>
                        </g>
                      ) : (
                        <g className="trashcan-closed" value={i}>
                          <path
                            d="M6.8,8.8h11L17,22.6
             H7.6L6.8,8.8z 
             M4.9,7l1,17.4h12.8
             l1-17.4
             H4.9z"
                            value={i}
                          ></path>
                          <polygon
                            points="13.6,10.3 13.1,21.2 14.9,21.2 15.4,10.3 "
                            value={i}
                          ></polygon>
                          <polygon
                            points="11.5,21.2 11,10.3 9.2,10.3 9.7,21.2 "
                            value={i}
                          ></polygon>
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
                            value={i}
                          ></path>
                        </g>
                      )}
                    </svg>
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
