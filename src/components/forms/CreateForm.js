import React, { useState } from "react";
import List from "../formLists/List";
import { TextField, Stack, Button } from "@mui/material";

const title = { fontSize: "13px", fontWeight: "bold" };

const CreateForm = ({ setActivityDetails, setIsTransactionFormShown }) => {
  const [activity, setActivity] = useState("");
  const [contributors, setcontributors] = useState("");
  const [items, setItems] = useState([]); //items refer to an array of contributors

  const addcontributors = (event) => {
    event.preventDefault();
    if (!contributors) {
      return;
    }
    setItems([...items, contributors]);
    setcontributors("");
  };

  const deletecontributors = (itemIndex) => {
    const newItem = items.filter((_, index) => index !== itemIndex);
    setItems(newItem);
  };

  const handleSubmit = () => {
    if (!activity || !items) {
      return;
    }

    let activityDetails = {
      activity: activity,
      items: items,
    };

    setActivityDetails(activityDetails);
    setIsTransactionFormShown(true);
    localStorage.setItem("activityDetails", JSON.stringify(activityDetails));
  };

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={1}>
          <p style={title}>Activity</p>
          <TextField
            id="activity-field"
            variant="outlined"
            onChange={(event) => setActivity(event.target.value)}
            value={activity}
            style={{ border: "1px solid black" }}
          />
        </Stack>

        <Stack spacing={1}>
          <p style={title}>Contributors</p>

          <Stack direction="row" spacing={2}>
            <TextField
              id="contributors-field"
              variant="outlined"
              onChange={(event) => setcontributors(event.target.value)}
              value={contributors}
              style={{ border: "1px solid black" }}
            />
            <Button
              size="small"
              onClick={addcontributors}
              style={{
                backgroundColor: "#693237",
                color: "white",
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
            <List list={items} deleteItems={deletecontributors} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handleSubmit}
              style={{
                backgroundColor: "#693237",
                color: "white",
                fontWeight: "bold",
                width: "200px",
              }}
              disableRipple
            >
              Create an Activity
            </Button>
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default CreateForm;
