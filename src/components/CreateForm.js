import React, { useState } from "react";
import List from "./List";
import { TextField, Stack, Button } from "@mui/material";

const CreateForm = ({ setTripDetails, setshowTransactionForm }) => {
  const [tripname, setTripname] = useState("");
  const [friends, setFriends] = useState("");

  //items refer to an array of friends
  const [items, setItems] = useState([]);

  const addFriends = (event) => {
    event.preventDefault();
    if (!friends) {
      return;
    }
    setItems([...items, friends]);
    setFriends("");
  };

  const deleteFriends = (itemIndex) => {
    const newItem = items.filter((_, index) => index !== itemIndex);
    setItems(newItem);
  };
  const handleSubmit = () => {
    if (!tripname || !items) {
      return;
    }

    let tripDetails = {
      tripname: tripname,
      items: items,
    };
    setshowTransactionForm(true);
    setTripDetails(tripDetails);

    localStorage.setItem("tripDetails", JSON.stringify(tripDetails));
  };
  return (
    <>
      <Stack spacing={1}>
        <p style={{ fontSize: "15px", fontWeight: "bold" }}>Name of Trip</p>
        <TextField
          placeholder="What is your trip name?"
          onChange={(event) => setTripname(event.target.value)}
          value={tripname}
          size="small"
          style={{ border: "1px solid white" }}
        ></TextField>
      </Stack>

      <Stack spacing={1}>
        <p style={{ fontSize: "15px", fontWeight: "bold" }}>Add Friends</p>

        <Stack direction="row" spacing={1}>
          <TextField
            placeholder="Who is coming along?"
            onChange={(event) => setFriends(event.target.value)}
            value={friends}
            size="small"
            style={{ border: "1px solid white" }}
          ></TextField>
          <Button
            color="secondary"
            size="small"
            onClick={addFriends}
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
        </Stack>
        <List list={items} deleteItems={deleteFriends} />
        <Button type="submit" onClick={handleSubmit}>
          Create Form
        </Button>
      </Stack>
    </>
  );
};

export default CreateForm;
