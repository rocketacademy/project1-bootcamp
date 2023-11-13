import React from "react";
import AgeInput from "./age-input";
import WeightInput from "./weight-input";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const cardFormat = ({ label }) => (
  <CardContent>
    <Typography variant="h5" component="div">
      {label}
    </Typography>
  </CardContent>
);

export const Demographic = ({ updateAgeInput, updateWeightInput }) => {
  return (
    <Grid spacing={2}>
      <Grid item xs={6}>
        <Card sx={{ backgroundColor: "#B2B4A3", minWidth: "130px" }}>
          {cardFormat({ label: "AGE" })}
          <AgeInput updateAgeInput={updateAgeInput} />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ backgroundColor: "#DCBC8B", minWidth: "130px" }}>
          {cardFormat({ label: "WEIGHT" })}
          <WeightInput updateWeightInput={updateWeightInput} />
        </Card>
      </Grid>
    </Grid>
  );
};
