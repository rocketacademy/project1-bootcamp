import React from "react";
import { Stack, Paper, Typography } from "@mui/material";

export const Title = () => {
  return (
    <>
      <Stack>
        <Paper square={false}>
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            fontWeight="bold"
            sx={{
              letterSpacing: 10,
              lineHeight: 2,
              padding: 2,
            }}
          >
            PEDIATRIC DOSE CALCULATOR
          </Typography>

          <Typography variant="h5" align="center" color="textSecondary">
            Instructions
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            sx={{
              padding: 2,
            }}
          >
            1. Enter patient’s age and weight
            <br />
            2. Select the drug to view the dose
          </Typography>
        </Paper>
      </Stack>
    </>
  );
};
