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

const AddTransactionsForm = ({
  activityDetails,
  setIsTransactionFormShown,
}) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [payer, setPayer] = useState(activityDetails.items[0]);
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
    setPayer(activityDetails.items[0]);
    setDescription("");
    setPrice("");
    storage.push(...details, changes);
    localStorage.setItem("transactions", JSON.stringify(storage));
  };

  const deleteItems = (detailIndex) => {
    const newDetails = details.filter((_, index) => index !== detailIndex);
    setDetails(newDetails);
  };

  const contributors = [];

  activityDetails.items.forEach((word) => {
    return contributors.push(word.charAt(0));
  });

  return (
    <>
      <Stack spacing={2}>
        <Stack direction="row" spacing={5}>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            {activityDetails.activity}
          </p>
          <AvatarGroup max={4}>
            {contributors.map((friend, index) => (
              <Avatar
                style={{
                  backgroundColor: "#f7ede2",
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
                style={{ width: "90px", border: "1px solid black" }}
              />
            </Stack>
            <Stack spacing={1}>
              <p style={title}>Price</p>
              <TextField
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price-field"
                variant="outlined"
                style={{ width: "90px", border: "1px solid black" }}
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
                  border: "1px solid black",
                  width: "100px",
                  padding: "10px",
                }}
              >
                {activityDetails.items.map((name, index) => (
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
              backgroundColor: "#ec407a",
              color: "white",
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
          getTripData={activityDetails}
          getTransactions={details}
          setIsTransactionFormShown={setIsTransactionFormShown}
        />
      </Stack>
    </>
  );
};

export default AddTransactionsForm;
