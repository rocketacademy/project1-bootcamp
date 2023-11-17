import React, { useState } from "react";
import List from "../formLists/List";
import { TextField, Stack, Button } from "@mui/material";

const title = { fontSize: "13px", fontWeight: "bold" };

const CreateForm = ({ setTripDetails, setIsTransactionFormShown }) => {
  const [tripname, setTripname] = useState("");
  const [friends, setFriends] = useState("");
  const [items, setItems] = useState([]); //items refer to an array of friends

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

    setTripDetails(tripDetails);
    setIsTransactionFormShown(true);
    localStorage.setItem("tripDetails", JSON.stringify(tripDetails));
  };

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={1}>
          <p style={title}>Name of Trip</p>
          <TextField
            id="tripname-field"
            variant="outlined"
            onChange={(event) => setTripname(event.target.value)}
            value={tripname}
          />
        </Stack>

        <Stack spacing={1}>
          <p style={title}>Friends</p>

          <Stack direction="row" spacing={2}>
            <TextField
              id="friends-field"
              variant="outlined"
              onChange={(event) => setFriends(event.target.value)}
              value={friends}
            />
            <Button
              size="small"
              onClick={addFriends}
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
        </Stack>
        <Stack spacing={3}>
          <div
            style={{
              display: "flex",
              flexFlow: "column wrap",
              flexDirection: "flex-start",
              maxWidth: "300px",
              maxHeight: "15vh",
            }}
          >
            <List list={items} deleteItems={deleteFriends} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handleSubmit}
              style={{
                backgroundColor: "#c6c09c",
                color: "black",
                fontWeight: "bold",
                width: "200px",
              }}
              disableRipple
            >
              Create a Trip
            </Button>
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default CreateForm;
