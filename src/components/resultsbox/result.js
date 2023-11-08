import React from "react";
import DrugSearch from "./drug-search";
import { DoseCalculator } from "./calculator";

export const Result = ({
  updateDrugSearch,
  selectedDrug,
  weightInput,
  ageInput,
}) => {
  return (
    <div className="result-box">
      <DrugSearch updateDrugSearch={updateDrugSearch} />
      <div className="result-display">
        <DoseCalculator
          selectedDrug={selectedDrug}
          weightInput={weightInput}
          ageInput={ageInput}
        />
      </div>
    </div>
  );
};
