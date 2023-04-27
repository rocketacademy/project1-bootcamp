import React, { useState } from "react";
import DisplayMeal from "./DisplayMeal";
import Fade from "./Fade";
import { getDistance } from "geolib";
import { randomNumber } from "../utils";

const FinalScreen = (props) => {
  const getCoords = (obj) => {
    const cords = obj.COORDS.split(", ");
    return {
      latitude: Number(cords[0]),
      longitude: Number(cords[1]),
    };
  };

  const getApplicableList = (arr, meal, type, area, settings) => {
    const halal = settings["halal"] ? "H" : "";
    const veg = settings["vegetarian"] ? "V" : "";
    let applicableList = [];
    const regex = new RegExp("^[A-Z]{2}$");
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].MEAL.includes(meal) &&
        arr[i].TYPE.includes(type) &&
        arr[i].TAGS.includes(halal) &&
        arr[i].TAGS.includes(veg)
      ) {
        if (regex.test(area) || area === "") {
          if (arr[i].AREA.includes(area)) {
            applicableList.push(arr[i]);
          }
        } else {
          const distance = getDistance(props.area, getCoords(arr[i]));
          if (distance < props.settings["searchRadius"] * 1000) {
            applicableList.push(arr[i]);
          }
        }
      }
    }

    return applicableList;
  };

  const resultArray = getApplicableList(
    props.data,
    props.meal,
    props.type,
    props.area,
    props.settings
  );

  const [select, setSelect] = useState(randomNumber(resultArray.length));

  const result = resultArray[select];
  return (
    <Fade className="screen" idName="final">
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
                  setSelect(newNo);
                }}
              >
                Another one!
              </button>
            )}
          </div>
        )}
        <button id="final-restart" onClick={props.handleRestart}>
          Restart
        </button>
      </div>
    </Fade>
  );
};

export default FinalScreen;
