import React from "react";
import AgeInput from "./age-input";
import WeightInput from "./weight-input";
import { Grid } from "@mui/material";

export const Demographic = ({ updateAgeInput, updateWeightInput }) => {
  return (
    <Grid>
      <Grid item xs={10}>
        <h2>Patient Demographics</h2>
      </Grid>
      <Grid item xs={5}>
        <AgeInput updateAgeInput={updateAgeInput} />
      </Grid>
      <Grid item xs={5}>
        <WeightInput updateWeightInput={updateWeightInput} />
      </Grid>
    </Grid>
  );
};
