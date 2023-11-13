import React from "react";
import AgeInput from "./age-input";
import WeightInput from "./weight-input";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const cardFormat = ({ label }) => (
  <CardContent sx={{ padding: "16px 16px 0px 16px" }}>
    <Typography variant="h5">{label}</Typography>
  </CardContent>
);

export const Demographic = ({ updateAgeInput, updateWeightInput }) => {
  return (
    <Container>
      <Grid spacing={2}>
        <Grid item xs={6}>
          <Card sx={{ backgroundColor: "#B2B4A3", minWidth: "120px" }}>
            {cardFormat({ label: "AGE" })}
            <AgeInput updateAgeInput={updateAgeInput} />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ backgroundColor: "#DCBC8B", minWidth: "120px" }}>
            {cardFormat({ label: "WEIGHT" })}
            <WeightInput updateWeightInput={updateWeightInput} />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
