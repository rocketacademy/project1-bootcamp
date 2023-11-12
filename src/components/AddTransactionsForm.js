import React, { useState } from "react";

import PriceDescriptionList from "./PriceDescriptionList";
import { TextField, Stack, InputAdornment, Button } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Calculate from "./Calculate";

const AddTransactionsForm = ({ tripDetails }) => {
  // const getTripData = JSON.parse(localStorage.getItem("formObject"));
  console.log(tripDetails);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [payer, setPayer] = useState(tripDetails.items[0]);

  let getTransactionData = () => {
    const data = JSON.parse(localStorage.getItem("transactions"));
    if (data !== null) {
      return data;
    }
    return [];
  };

  const [details, setDetails] = useState(getTransactionData);

  let changes = {
    description: description,
    price: price,
    payer: payer,
  };

  const addItems = (event) => {
    event.preventDefault();
    let storage = [];
    if (!Number(price) && !description) {
      return;
    }

    setDetails([...details, changes]);

    setPayer(tripDetails[0]);

    setDescription("");
    setPrice("");

    storage.push(...details, changes);
    console.log(storage);
    localStorage.setItem("transactions", JSON.stringify(storage));
  };

  const deleteItems = (detailIndex) => {
    const newDetails = details.filter((_, index) => index !== detailIndex);
    setDetails(newDetails);
  };

  console.log(details);
  return (
    <>
      <h2>{tripDetails.tripname}</h2>
      <p>{tripDetails.items}</p>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1}>
          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
            Item Description
          </p>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            size="small"
          ></TextField>
        </Stack>
        <Stack spacing={1}>
          <p style={{ fontSize: "10px", fontWeight: "bold" }}>Price</p>
          <TextField
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
        <select
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
          name="payer"
        >
          {tripDetails.items.map((name, index) => (
            <option key={index}>{name}</option>
          ))}
        </select>{" "}
        <p>paid</p>
      </Stack>
      <Button
        color="secondary"
        size="small"
        onClick={addItems}
        disableRipple
        style={{
          backgroundColor: "#c6ff00",
          color: "black",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        +
      </Button>
      <PriceDescriptionList details={details} deleteItems={deleteItems} />

      <Calculate getTripData={tripDetails} getTransactions={details} />
    </>
  );
};

export default AddTransactionsForm;
