import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[500]),
  backgroundColor: yellow[500],
  "&:hover": {
    backgroundColor: yellow[700],
  },
}));

const InputTextField = styled(TextField)({
  "& label": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "yellow",
  },
  "& input:valid + fieldset": {
    borderColor: "white",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderColor: "yellow",
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "yellow",
    },
  },
  "& .MuiTypography-root": {
    color: "white",
  },
});

const dateNow = new Date();
const year = dateNow.getFullYear();
const monthWithOffset = dateNow.getUTCMonth() + 1;
const month =
  monthWithOffset.toString().length < 2
    ? `0${monthWithOffset}`
    : monthWithOffset;
const date =
  dateNow.getUTCDate().toString().length < 2
    ? `0${dateNow.getUTCDate()}`
    : dateNow.getUTCDate();

const materialDateInput = `${year}-${month}-${date}`;

const defaultValues = {
  date: materialDateInput,
  fuel: 0,
  trip: 0,
  consumption: 0,
};

const calculateFuelConsumption = (fuel, trip) => {
  let fuelConsumption = trip / fuel;
  return fuelConsumption;
};

export const Form = (props) => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    let date = formValues.date;
    let fuel = formValues.fuel;
    let trip = formValues.trip;
    let consumption = calculateFuelConsumption(
      formValues.fuel,
      formValues.trip
    );
    let submittedRecord = {
      date,
      fuel,
      trip,
      consumption,
    };
    console.log(submittedRecord);
    props.onUpdate(submittedRecord);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={2}
        sx={{
          input: {
            color: "white",
          },
        }}
      >
        <Grid item>
          <InputTextField
            id="date-input"
            name="date"
            label="Date"
            type="date"
            value={formValues.date}
            onChange={handleInputChange}
            sx={{
              svg: { color: "white" },
            }}
          />
        </Grid>
        <Grid item>
          <InputTextField
            id="fuel-input"
            name="fuel"
            label="Fuel"
            type="number"
            value={formValues.fuel}
            onChange={handleInputChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">L</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item>
          <InputTextField
            id="trip-input"
            name="trip"
            label="Tripmeter"
            type="number"
            value={formValues.trip}
            onChange={handleInputChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">Km</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item>
          <ColorButton variant="contained" color="primary" type="submit">
            Calculate!
          </ColorButton>
        </Grid>
      </Grid>
    </form>
  );
};
