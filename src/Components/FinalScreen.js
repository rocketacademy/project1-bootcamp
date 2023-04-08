import React from "react";
import DisplayMeal from "./DisplayMeal";
import { getDistance } from "geolib";

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
      select: 0,
    };
  }

  componentDidMount() {
    this.setState({
      select: randomNumber(this.state.resultArray.length),
    });
  }

  getCoords = (obj) => {
    const cords = obj.COORDS.split(", ");
    return {
      latitude: Number(cords[0]),
      longitude: Number(cords[1]),
    };
  };

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
      for (let i = 0; i < arr.length; i++) {
        const distance = getDistance(this.props.area, this.getCoords(arr[i]));
        if (
          arr[i].MEAL.includes(meal) &&
          arr[i].TYPE.includes(type) &&
          distance < this.props.searchRadius * 1000
        ) {
          applicableList.push(arr[i]);
        }
      }
    }

    return applicableList;
  };

  render() {
    const { resultArray, select } = this.state;
    const result = resultArray[select];
    return (
      <div className="screen" id="final">
        <div className="header">
          <img src="./logos/logo-black-wide.svg" alt="logo" />
        </div>
        <DisplayMeal meal={result} />

        <div className="footer">
          {resultArray.length !== 0 && (
            <div className="food-links">
              <button
                role="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(result.LINK, "_blank", "noreferrer");
                }}
              >
                Open in Maps
              </button>
              {resultArray.length !== 1 && (
                <button
                  role="link"
                  onClick={(e) => {
                    e.preventDefault();
                    let newNo = randomNumber(resultArray.length);
                    while (newNo === select) {
                      newNo = randomNumber(resultArray.length);
                    }
                    this.setState({
                      select: newNo,
                    });
                  }}
                >
                  Another one!
                </button>
              )}
            </div>
          )}
          <button id="final-restart" onClick={this.props.handleRestart}>
            Restart
          </button>
        </div>
      </div>
    );
  }
}
