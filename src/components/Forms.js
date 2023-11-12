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
  const [showTransactionForm, setshowTransactionForm] = useState(
    false || isTripDataEntered
  );

  return (
    <>
      {!showTransactionForm ? (
        <CreateForm
          setTripDetails={setTripDetails}
          setshowTransactionForm={setshowTransactionForm}
        />
      ) : (
        <AddTransactionsForm tripDetails={tripDetails} />
      )}
    </>
  );
};

export default Forms;
