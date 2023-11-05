import React from "react";
import DrugSearch from "./drug-search";
import { DoseCalculator } from "./calculator";

export const Result = ({
  updateDrugSearch,
  drugList,
  selectedDrug,
  weightInput,
}) => {
  return (
    <div className="result-box">
      <DrugSearch updateDrugSearch={updateDrugSearch} />
      <div className="result-display">
        <DoseCalculator
          drugList={drugList}
          selectedDrug={selectedDrug}
          weightInput={weightInput}
        />
      </div>
    </div>
  );
};
