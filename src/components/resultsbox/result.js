import React from "react";
import DrugSearch from "./drug-search";
import ResultDisplay from "./result-display";

export const Result = () => {
  return (
    <div className="result-box">
      <DrugSearch />
      <div className="result-display">
        <ResultDisplay />
      </div>
    </div>
  );
};
