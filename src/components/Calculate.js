import React, { useState } from "react";

import { Button, Box, Modal } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%",
  width: "400px",
  border: "2px solid black",
  backgroundColor: "white",
  color: "black",
};

const Calculate = ({ getTripData, getTransactions }) => {
  const [showMessage, setShowMessage] = useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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

  const convertToObj = (allNames, getPrices) => {
    let newObj = {};

    allNames.forEach((friend, amount) => {
      newObj[friend] = getPrices[amount];
    });
    return newObj;
  };

  let getPrices = getAllPrices(getTransactions, friends);

  let getNewObj = convertToObj(friends, getPrices);

  const handleClick = () => {
    let finalMessage = "";
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

    while (firstPayer < lastPayer) {
      debt = Math.min(-sortPrices[firstPayer], sortPrices[lastPayer]);
      sortPrices[firstPayer] += debt;
      sortPrices[lastPayer] -= debt;

      finalMessage += `${sortEveryone[firstPayer]} owes ${sortEveryone[lastPayer]} $${debt}`;

      if (sortPrices[firstPayer] === 0) {
        firstPayer += 1;
      } else if (sortPrices[lastPayer] === 0) {
        lastPayer -= 1;
      }
    }
    setOpen(true);

    return setShowMessage(finalMessage);
  };

  const restart = () => {
    navigate("/dashboard");
    localStorage.removeItem("transactions");
    localStorage.removeItem("tripDetails");
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="calculate-expenses"
        aria-describedby="calculate-expenses"
      >
        <Box sx={style}>
          <p>{showMessage}</p>
          <Button onClick={restart} variant="contained">
            <HomeIcon />
          </Button>
        </Box>
      </Modal>

      <Button onClick={handleClick}>Calculate Total</Button>
    </>
  );
};

export default Calculate;
