import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import HomeScreen from "./Components/HomeScreen";
import Instructions from "./Components/Instructions";
import QuestionScreen from "./Components/QuestionScreen";
import FinalScreen from "./Components/FinalScreen";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [stage, setStage] = useState(1);
  const [locationAvailable, setLocationAvailable] = useState(false);
  const [meal, setMeal] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [settings, setSettings] = useState({
    searchRadius: 1,
    firstTime: true,
    halal: false,
    vegetarian: false,
  });

  useEffect(() => {
    getCsvData();
    if ("geolocation" in navigator) {
      setLocationAvailable(true);
    }
    if (localStorage.getItem("settings") !== null) {
      setSettings(JSON.parse(localStorage.getItem("settings")));
    }
  }, []);

  const getCsvData = () => {
    axios
      .get(
        "https://docs.google.com/spreadsheets/d/1lr6rakViESEyL92WLERkX7ZY3lRuKr5O8UG5B7LlIq4/export?format=csv"
      )
      .then((rawOutput) => {
        const outputData = Papa.parse(rawOutput.data, {
          header: true,
          skipEmptyLines: true,
        });
        setData(outputData.data);
      });
  };

  const handleNext = () => {
    if (settings["firstTime"]) {
      setStage((current) => current + 1);
      if (stage === 2) {
        let settingsCopy = Object.assign({}, settings);
        settingsCopy.firstTime = false;
        setSettings(settingsCopy);
        localStorage.setItem("settings", JSON.stringify(settings));
      }
    } else {
      setStage((current) => (current === 1 ? current + 2 : current + 1));
    }
  };

  const handleRestart = () => {
    setStage(1);
    setMeal(null);
    setType(null);
    setArea(null);
  };

  const handleUpdate = (name, value) => {
    if (name === "area") {
      setArea(value);
    } else if (name === "meal") {
      setMeal(value);
    } else if (name === "type") {
      setType(value);
    } else if (name === "settings") {
      setSettings(value);
    }
  };

  let currentStage;
  if (stage === 1) {
    currentStage = (
      <HomeScreen
        data={data}
        handleNext={handleNext}
        handleUpdate={handleUpdate}
        settings={settings}
      />
    );
  } else if (stage === 2) {
    currentStage = <Instructions handleNext={handleNext} />;
  } else if (stage === 3) {
    currentStage = (
      <QuestionScreen
        locationAvailable={locationAvailable}
        searchRadius={settings["searchRadius"]}
        handleUpdate={handleUpdate}
        handleRestart={handleRestart}
        handleNext={handleNext}
      />
    );
  } else if (stage === 4) {
    currentStage = (
      <FinalScreen
        settings={settings}
        data={data}
        meal={meal}
        type={type}
        area={area}
        handleRestart={handleRestart}
      />
    );
  }

  return <div className="container">{currentStage}</div>;
};

export default App;
