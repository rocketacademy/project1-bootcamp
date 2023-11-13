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
    <Grid spacing={0} justifyContent="right">
      <Grid item xs={4}>
        <Card sx={{ backgroundColor: "#B2B4A3" }}>
          {cardFormat({ label: "AGE" })}
          <AgeInput updateAgeInput={updateAgeInput} />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ backgroundColor: "#DCBC8B" }}>
          {cardFormat({ label: "WEIGHT" })}
          <WeightInput updateWeightInput={updateWeightInput} />
        </Card>
      </Grid>
    </Grid>
  );
};
