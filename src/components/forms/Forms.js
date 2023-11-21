import React, { useState } from "react";
import CreateForm from "./CreateForm";
import AddTransactionsForm from "./AddTransactionsForm";

const isActivityDataEntered = () => {
  const getActivityData = JSON.parse(localStorage.getItem("activityDetails"));
  if (getActivityData) {
    return true;
  }
  return false;
};

const Forms = () => {
  const getActivityData = JSON.parse(localStorage.getItem("activityDetails"));

  const [activityDetails, setActivityDetails] = useState(
    getActivityData ? getActivityData : { activity: "", items: "" }
  );
  const [isTransactionFormShown, setIsTransactionFormShown] = useState(
    isActivityDataEntered
  );

  return (
    <>
      {!isTransactionFormShown ? (
        <>
          <CreateForm
            setActivityDetails={setActivityDetails}
            setIsTransactionFormShown={setIsTransactionFormShown}
          />
        </>
      ) : (
        <>
          <div style={{ overflow: "auto", height: "50vh" }}>
            <AddTransactionsForm
              activityDetails={activityDetails}
              setIsTransactionFormShown={setIsTransactionFormShown}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Forms;
