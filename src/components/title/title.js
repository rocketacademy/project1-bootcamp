import React from "react";
import { Stack, Typography } from "@mui/material";

export const Title = () => {
  return (
    <>
      <Stack>
        <Typography
          variant="h4"
          align="left"
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

        <Typography
          variant="h5"
          align="left"
          color="textSecondary"
          sx={{
            paddingLeft: 2,
          }}
        >
          Instructions
        </Typography>
        <Typography
          variant="body1"
          align="left"
          color="textSecondary"
          sx={{
            paddingLeft: 2,
          }}
        >
          1. Enter patient’s age and weight
          <br />
          2. Select the drug to view the dose
        </Typography>
      </Stack>
    </>
  );
};
