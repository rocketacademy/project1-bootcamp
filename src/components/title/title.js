import React from "react";
import { Grid } from "@mui/material";

export const Title = () => {
  return (
    <>
      <Grid>
        <Grid item xs={10}>
          <h1>Pediatric Dose Calculator</h1>
        </Grid>
        <Grid item xs={10}>
          <h2>Instructions</h2>
        </Grid>
        <Grid item xs={10}>
          <ol>
            <li>Enter patient’s age and weight</li>
            <li>Select the drug to view the dose</li>
          </ol>
        </Grid>
      </Grid>
    </>
  );
};
