import React from "react";
import AgeInput from "./age-input";
import WeightInput from "./weight-input";

export const Demographic = ({ updateAgeInput, updateWeightInput }) => {
  return (
    <div className="demographic">
      <h2>Patient Demographics</h2>
      <div className="demographic-input">
        <AgeInput updateAgeInput={updateAgeInput} />
        <WeightInput updateWeightInput={updateWeightInput} />
      </div>
    </div>
  );
};
