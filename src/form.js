import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
      >
        <Grid item>
          <TextField
            id="date-input"
            name="date"
            label="Date"
            type="date"
            value={formValues.date}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="fuel-input"
            name="fuel"
            label="Fuel"
            type="number"
            value={formValues.fuel}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="trip-input"
            name="trip"
            label="Tripmeter"
            type="number"
            value={formValues.trip}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
