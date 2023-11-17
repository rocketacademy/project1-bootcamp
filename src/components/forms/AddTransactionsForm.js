import React, { useState } from "react";

import PriceDescriptionList from "../formLists/PriceDescriptionList";
import {
  TextField,
  Stack,
  InputAdornment,
  Button,
  AvatarGroup,
  Avatar,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Calculate from "../calculate/Calculate";

const title = { fontSize: "13px", fontWeight: "bold" };

let getTransactionData = () => {
  const data = JSON.parse(localStorage.getItem("transactions"));
  if (data !== null) {
    return data;
  }
  return [];
};

const AddTransactionsForm = ({ tripDetails, setIsTransactionFormShown }) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [payer, setPayer] = useState(tripDetails.items[0]);
  const [details, setDetails] = useState(getTransactionData);

  let changes = {
    description: description,
    price: price,
    payer: payer,
  };

  const addItems = () => {
    let storage = [];
    if (!description) {
      return;
    }
    setDetails([...details, changes]);
    setPayer(tripDetails.items[0]);
    setDescription("");
    setPrice("");
    storage.push(...details, changes);
    localStorage.setItem("transactions", JSON.stringify(storage));
  };

  const deleteItems = (detailIndex) => {
    const newDetails = details.filter((_, index) => index !== detailIndex);
    setDetails(newDetails);
  };

  const friends = [];

  tripDetails.items.forEach((word) => {
    return friends.push(word.charAt(0));
  });

  return (
    <>
      <Stack spacing={2}>
        <Stack direction="row" spacing={5}>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            {tripDetails.tripname}
          </p>
          <AvatarGroup max={4}>
            {friends.map((friend, index) => (
              <Avatar
                style={{
                  backgroundColor: "#ffb284",
                  color: "black",
                  fontWeight: "bold",
                }}
                key={index.toString()}
              >
                {friend}
              </Avatar>
            ))}
          </AvatarGroup>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1}>
            <Stack spacing={1}>
              <p style={title}>Item</p>
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="item-field"
                variant="outlined"
                style={{ width: "90px" }}
              />
            </Stack>
            <Stack spacing={1}>
              <p style={title}>Price</p>
              <TextField
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price-field"
                variant="outlined"
                style={{ width: "90px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack spacing={1}>
              <p style={title}>Payer</p>
              <select
                value={payer}
                onChange={(e) => setPayer(e.target.value)}
                style={{
                  backgroundColor: "#f7ede2",
                  width: "100px",
                  padding: "10px",
                }}
              >
                {tripDetails.items.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </Stack>
          </Stack>
          <Button
            onClick={addItems}
            style={{
              backgroundColor: "#ffab91",
              color: "black",
              fontSize: "22px",
              fontWeight: "bold",
            }}
            disableRipple
          >
            +
          </Button>
        </Stack>
        <PriceDescriptionList details={details} deleteItems={deleteItems} />
        <Calculate
          getTripData={tripDetails}
          getTransactions={details}
          setIsTransactionFormShown={setIsTransactionFormShown}
        />
      </Stack>
    </>
  );
};

export default AddTransactionsForm;
