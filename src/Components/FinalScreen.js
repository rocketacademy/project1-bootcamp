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
    const result = this.state.resultArray[this.state.select];
    return (
      <div className="screen" id="final">
        <h3>Makan Where</h3>
        <DisplayMeal meal={result} />
        {this.state.resultArray.length !== 0 && (
          <div>
            <button
              role="link"
              onClick={(e) => {
                e.preventDefault();
                window.open(result.LINK, "_blank", "noreferrer");
              }}
            >
              Open in Google Maps
            </button>
            <button
              role="link"
              onClick={(e) => {
                e.preventDefault();
                let newNo = randomNumber(this.state.resultArray.length);
                while (newNo === this.state.select) {
                  newNo = randomNumber(this.state.resultArray.length);
                }
                this.setState({
                  select: newNo,
                });
              }}
            >
              Another one!
            </button>
          </div>
        )}

        <button onClick={this.props.handleRestart}>Restart</button>
      </div>
    );
  }
}
