import React, { useState, useEffect } from "react";
import { BackButton, Button, FormMood } from "../components ";
import { Link, NavLink, Router, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Mood = () => {
  const [moodDate, setMoodDate] = useState("");
  const [moodTime, setMoodTime] = useState("");
  const [mood, setMood] = useState("");
  const [moodID, setMoodID] = useState("");
  const [checked, setChecked] = useState({
    good: false,
    neutral: false,
    bad: false,
  });
  const [itemData, setItemData] = useState({});

  // const navigate = useNavigate();

  const [moodLog, setMoodLog] = useLocalStorage("moodLog", []);

  const changeMood = (e) => {
    setChecked(() => {
      return { [e.target.value]: true };
    });
  };

  const handleMoodDateChange = (e) => {
    setMoodDate(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleMoodTimeChange = (e) => {
    setMoodTime(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleMoodChange = (e) => {
    setMood(e.target.value);
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
      id: e.target.id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMoodLog([...moodLog, itemData]);
    setItemData({});
    // navigate("/home");
  };

  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(data));
  // }, [data]);

  // console.log(data);

  return (
    <div className="base-container-secondary">
      <BackButton />
      <p className="font-light w-screen mt-2 text-3xl text-dark-pink text-left pl-10">
        Mood
      </p>
      <FormMood
        moodDate={moodDate}
        moodTime={moodTime}
        mood={mood}
        checked={checked}
        onDateChange={handleMoodDateChange}
        onTimeChange={handleMoodTimeChange}
        onMoodChange={handleMoodChange}
        onChecked={changeMood}
      />
      <button
        onClick={handleSubmit}
        className="text-xl p-3 m-4 w-60 bg-dark-pink drop-shadow-lg hover:drop-shadow-xl hover:bg-pink-700 rounded-xl"
      >
        <Link to="/home">Record</Link>
      </button>
    </div>
  );
};

export default Mood;
