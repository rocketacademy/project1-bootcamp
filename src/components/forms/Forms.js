import React, { useState } from "react";
import CreateForm from "./CreateForm";
import AddTransactionsForm from "./AddTransactionsForm";

const isTripDataEntered = () => {
  const getTripData = JSON.parse(localStorage.getItem("tripDetails"));
  if (getTripData) {
    return true;
  }
  return false;
};

const Forms = () => {
  const getTripData = JSON.parse(localStorage.getItem("tripDetails"));

  const [tripDetails, setTripDetails] = useState(
    getTripData ? getTripData : { tripname: "", items: "" }
  );
  const [isTransactionFormShown, setIsTransactionFormShown] = useState(
    false || isTripDataEntered
  );

  return (
    <>
      {!isTransactionFormShown ? (
        <CreateForm
          setTripDetails={setTripDetails}
          setIsTransactionFormShown={setIsTransactionFormShown}
        />
      ) : (
        <AddTransactionsForm
          tripDetails={tripDetails}
          setIsTransactionFormShown={setIsTransactionFormShown}
        />
      )}
    </>
  );
};

export default Forms;
