import React from "react";
import DrugSearch from "./DrugSearch";
import { DoseCalculator } from "./Calculator";
import { Grid, Container } from "@mui/material";

export const Result = ({
  updateDrugSearch,
  selectedDrug,
  weightInput,
  ageInput,
  resetSearch,
}) => {
  return (
    <Container>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={10} justifyContent="right">
          <DrugSearch
            updateDrugSearch={updateDrugSearch}
            resetSearch={resetSearch}
          />
        </Grid>
        <Grid item xs={10}>
          <DoseCalculator
            selectedDrug={selectedDrug}
            weightInput={weightInput}
            ageInput={ageInput}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
