import React from "react";

export default class DisplayExpense extends React.Component{
  render(){
    return (
      <div>
        <h3>
          {this.props.item} - ${this.props.amount}
        </h3>
        <p>Spent by - {this.props.spenders} </p>
      </div>
    );
  }
}