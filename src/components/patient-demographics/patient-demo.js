import React from "react";
import AgeInput from "./age-input";
import WeightInput from "./weight-input";

export const Demographic = () => {
  return (
    <div className="demographic">
      <h2>Patient Demographics</h2>
      <AgeInput />
      <WeightInput />
    </div>
  );
};
