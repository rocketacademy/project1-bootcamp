import React from "react";

export default class DisplayMeal extends React.Component {
  render() {
    let display;
    const meal = this.props.meal;
    if (this.props.meal) {
      display = (
        <div className="food-display">
          <img src={meal.IMAGE} alt={meal.NAME} />
          <div>
            <h1>{meal.NAME}</h1>
            <p>{meal.ADDRESS}</p>
            <h4>{meal.TAGS}</h4>
          </div>
        </div>
      );
    } else {
      display = (
        <div className="food-display">
          <h2>I couldn't find anything</h2>
          <img id="logo-failed" src="./logos/icon-fail.svg" alt="logo" />
          <h2>that fits your criteria</h2>
        </div>
      );
    }
    return display;
  }
}
