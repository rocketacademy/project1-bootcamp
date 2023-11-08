import React from "react";
import DrugSearch from "./drug-search";
import { DoseCalculator } from "./calculator";
import Stack from "@mui/material/Stack";

export const Result = ({
  updateDrugSearch,
  selectedDrug,
  weightInput,
  ageInput,
}) => {
  return (
    <Stack
      className="result-box"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <DrugSearch updateDrugSearch={updateDrugSearch} />
      <DoseCalculator
        selectedDrug={selectedDrug}
        weightInput={weightInput}
        ageInput={ageInput}
      />
    </Stack>
  );
};
