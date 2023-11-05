import React from "react";
import DrugSearch from "./drug-search";
import ResultDisplay from "./result-display";

export const Result = ({ updateDrugSearch }) => {
  return (
    <div className="result-box">
      <DrugSearch updateDrugSearch={updateDrugSearch} />
      <div className="result-display">
        <ResultDisplay />
      </div>
    </div>
  );
};
