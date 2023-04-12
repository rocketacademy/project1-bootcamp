import React from "react";
import { Eraser } from "react-bootstrap-icons";

const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberBar = ({ setClickValue, selected }) => {
  return (
    <div className="choiceboard-ctn">
      <div className="choice-ctn">
        {numberRow.map((choice) => {
          let selectedClass = choice === selected ? "selected" : "";
          return (
            <div
              className={`choice ${selectedClass} noSelect `}
              key={`key-1-${choice}`}
              onClick={() => setClickValue(choice)}
            >
              <p className="choice-text">{choice}</p>
            </div>
          );
        })}
        <div
          className={`choice
                    ${selected === 0 ? "selected-eraser" : ""}
                    noSelect`}
          key={`key-2-${0}`}
          onClick={() => setClickValue(0)}
        >
          <span className="eraser-ctn">
            <Eraser size={30} className="eraser-icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NumberBar;
