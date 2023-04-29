import React, { useState, useEffect } from "react";
import { BackButton } from "../components ";
import { Link, NavLink } from "react-router-dom";

const Log = () => {
  const [logDate, setLogDate] = useState("");
  const [itemData, setItemData] = useState({});

  const [dataLog, setDataLog] = useState([
    {
      logDate: null,
    },
  ]);

  const handleLogDateChange = (e) => {
    setLogDate(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataLog([...dataLog, itemData]);
    setItemData({});
  };
  // console.log(dataLog);

  return (
    <div className="base-container-secondary">
      <BackButton />
      <p className="font-light w-screen mt-2 text-3xl text-dark-pink text-left pl-10">
        Log
      </p>
      <p className="font-light w-screen mt-5 text-sm text-dark-pink text-left pl-10">
        Select a date to view your past records!
      </p>
      <div className="bg-white rounded-xl drop-shadow-xl w-68 text-dark-pink">
        <label>Date:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="date"
          id="log-date"
          placeholder=""
          value={logDate}
          onChange={handleLogDateChange}
          name="logDate"
        />
      </div>
      <p className="font-light w-screen mt-5 text-xl text-dark-pink text-left pl-10">
        Graph
      </p>
      <div className="h-60 w-11/12 mt-5 bg-white rounded-xl drop-shadow-xl"></div>
      <button
        onClick={handleSubmit}
        className="text-xl p-3 m-4 w-60 bg-dark-pink drop-shadow-lg hover:drop-shadow-xl hover:bg-pink-700 rounded-xl"
      >
        Check
      </button>
      {/* <p>{logDate}</p> */}
    </div>
  );
};

export default Log;
