import React from "react";
import SearchInput from "./drug-search";

export const ResultDisplay = () => {
  return (
    <div className="result-box">
      <SearchInput />
      <div className="result-display"></div>
    </div>
  );
};
