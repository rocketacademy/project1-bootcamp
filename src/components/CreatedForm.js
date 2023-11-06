import React from "react";

const CreatedForm = ({ getNames }) => {
  return (
    <>
      <h2>{getNames.tripname}</h2>
      <p>{getNames.items}</p>
    </>
  );
};

export default CreatedForm;
