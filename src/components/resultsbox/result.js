import React from "react";
import DrugSearch from "./drug-search";
import { DoseCalculator } from "./calculator";
import { Grid } from "@mui/material";

export const Result = ({
  updateDrugSearch,
  selectedDrug,
  weightInput,
  ageInput,
}) => {
  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item xs={10}>
        <DrugSearch updateDrugSearch={updateDrugSearch} />
      </Grid>
      <Grid item xs={10}>
        <DoseCalculator
          selectedDrug={selectedDrug}
          weightInput={weightInput}
          ageInput={ageInput}
        />
      </Grid>
    </Grid>
  );
};
