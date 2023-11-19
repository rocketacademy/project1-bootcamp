import React, { useState } from "react";
import { Button, Stack, Modal } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "270px",
  border: "2px solid black",
  backgroundColor: "#fff1e6",
  color: "black",
};

const Calculate = ({
  getTripData,
  getTransactions,
  setIsTransactionFormShown,
}) => {
  const [showMessage, setShowMessage] = useState([]);
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const friends = getTripData.items;

  const getAllPrices = (entireData, entireFriends) => {
    let allPrices = [];

    for (let i = 0; i < entireFriends.length; i += 1) {
      let sumOfIndividualPayer = 0;
      for (let j = 0; j < entireData.length; j += 1) {
        if (entireFriends[i] === entireData[j].payer) {
          sumOfIndividualPayer += Number(entireData[j].price);
        }
      }
      allPrices.push(sumOfIndividualPayer);
    }
    return allPrices;
  };

  const convertArrToObj = (allNames, getPrices) => {
    let newObj = {};

    allNames.forEach((friend, amount) => {
      newObj[friend] = getPrices[amount];
    });
    return newObj;
  };

  let getPrices = getAllPrices(getTransactions, friends);

  let getNewObj = convertArrToObj(friends, getPrices);

  const handleClick = () => {
    let message = "";
    const sum = getPrices.reduce((acc, curr) => curr + acc);

    const meanPrices = sum / friends.length;

    const sortEveryone = friends.sort(
      (personA, personB) => getNewObj[personA] - getNewObj[personB]
    );

    const sortPrices = sortEveryone.map(
      (person) => getNewObj[person] - meanPrices
    );

    let firstPayer = 0;
    let lastPayer = sortEveryone.length - 1;
    let debt;
    let text = [];
    while (firstPayer < lastPayer) {
      debt = Math.min(-sortPrices[firstPayer], sortPrices[lastPayer]);
      sortPrices[firstPayer] += debt;
      sortPrices[lastPayer] -= debt;

      message = `${sortEveryone[firstPayer]} owes ${
        sortEveryone[lastPayer]
      } $${debt.toFixed(2)}`;

      text.push(message);

      if (sortPrices[firstPayer] === 0) {
        firstPayer += 1;
      } else if (sortPrices[lastPayer] === 0) {
        lastPayer -= 1;
      }
    }
    setOpen(true);

    return setShowMessage(text);
  };

  const restartFormCreation = () => {
    setIsTransactionFormShown(false);
    localStorage.removeItem("transactions");
    localStorage.removeItem("tripDetails");

    navigate("/dashboard");
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            backgroundColor: "#693237",
            color: "white",
            fontWeight: "bold",
            width: "100px",
          }}
          onClick={handleClick}
          disableRipple
        >
          Split
        </Button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Stack style={modalStyles} spacing={1}>
          <div style={{ textAlign: "center", padding: "5px", margin: "15px" }}>
            {showMessage.map((e, index) => (
              <>
                <p key={index.toString()}>{e}</p>
                <br></br>
              </>
            ))}
          </div>
          <Button
            onClick={restartFormCreation}
            style={{
              backgroundColor: "#ec407a",
              color: "white",
              fontWeight: "bold",
            }}
            disableRipple
          >
            <HomeIcon />
          </Button>
        </Stack>
      </Modal>
    </>
  );
};

export default Calculate;
