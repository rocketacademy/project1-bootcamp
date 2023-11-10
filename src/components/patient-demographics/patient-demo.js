import React from "react";
import AgeInput from "./age-input";
import WeightInput from "./weight-input";
import { Grid, Typography } from "@mui/material";

export const Demographic = ({ updateAgeInput, updateWeightInput }) => {
  return (
    <Grid>
      <Grid item xs={10}>
        <Typography
          variant="h5"
          textAlign="center"
          color="textSecondary"
          sx={{
            paddingTop: 2,
          }}
        >
          Patient Demographics
        </Typography>
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
