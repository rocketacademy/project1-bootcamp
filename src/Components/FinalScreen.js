import React from "react";
import DisplayMeal from "./DisplayMeal";

const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

export default class FinalScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultArray: this.getApplicableList(
        this.props.data,
        this.props.meal,
        this.props.type,
        this.props.area
      ),
    };
  }

  getApplicableList = (arr, meal, type, area) => {
    let applicableList = [];
    const regex = new RegExp("^[A-Z]{2}$");
    if (regex.test(area)) {
      for (let i = 0; i < arr.length; i++) {
        if (
          arr[i].MEAL.includes(meal) &&
          arr[i].TYPE.includes(type) &&
          arr[i].AREA.includes(area)
        ) {
          applicableList.push(arr[i]);
        }
      }
    } else {
      let actualArea = 0;
      for (let i = 0; i < arr.length; i++) {
        if (
          arr[i].MEAL.includes(meal) &&
          arr[i].TYPE.includes(type) &&
          arr[i].AREA.includes(area)
        ) {
          applicableList.push(arr[i]);
        }
      }
    }

    return applicableList;
  };

  render() {
    let select = randomNumber(this.state.resultArray.length);
    const result = this.state.resultArray[select];
    return (
      <div className="screen" id="final">
        <h1>Makan Where</h1>
        <DisplayMeal meal={result} />
        {this.state.resultArray.length !== 0 && (
          <button
            role="link"
            onClick={(e) => {
              e.preventDefault();
              window.open(result.LINK, "_blank", "noreferrer");
            }}
          >
            Open in Google Maps
          </button>
        )}

        <button onClick={this.props.handleRestart}>Restart</button>
      </div>
    );
  }
}
