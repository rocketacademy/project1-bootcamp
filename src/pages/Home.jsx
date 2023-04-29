import React, { useState, useEffect } from "react";
import {
  Clock,
  DummyCalendar,
  NavBar,
  Calendar,
  Graph,
  MedGraph,
  DummyGraph,
  DummyMedGraph,
} from "../components ";
import { Link, NavLink, Router, useNavigate } from "react-router-dom";

const Home = () => {
  const [profileData, setProfileData] = useState([]);
  const [medicineData, setMedicineData] = useState([]);
  const [moodData, setMoodData] = useState([]);

  const dataSync = async () => {
    const response = await JSON.parse(localStorage.getItem("profileLog"));
    setProfileData(response);
    // console.log(response);
  };

  useEffect(() => {
    dataSync();
  }, []);

  const [name, setName] = useState("");

  const index = profileData.length - 1;

  useEffect(() => {
    if (profileData.length !== 0) {
      setName(profileData[index].name);
    }
  }, [profileData, index]);

  const medDataSync = async () => {
    const response = await JSON.parse(localStorage.getItem("medicineLog"));
    setMedicineData(response);
    //  console.log(response);
  };

  useEffect(() => {
    medDataSync();
  }, []);

  const moodDataSync = async () => {
    const response = await JSON.parse(localStorage.getItem("moodLog"));
    setMoodData(response);
    //  console.log(response);
  };

  useEffect(() => {
    moodDataSync();
  }, []);

  // console.log(medicineData);

  return (
    <div className="base-container-secondary">
      <div className="flex justify-start mt-10 w-screen pl-10">
        <Clock />
      </div>
      <p className="font-light w-screen mt-2 text-xl text-dark-pink text-left pl-10">
        Welcome
      </p>
      <p className="font-light w-screen mt-2 text-3xl text-dark-pink text-left pl-10">
        {name}
      </p>
      <NavBar />
      <p className="font-light w-screen mt-5 text-xl text-dark-pink text-left pl-10">
        Calendar
      </p>
      <p className="font-light w-screen mt-2 mb-2 text-sm text-dark-pink text-left pl-10 pr-10">
        Please input your medicine dose and mood first to update this calendar.
      </p>
      <div className="h-max w-11/12 bg-white rounded-xl drop-shadow-xl">
        {medicineData && moodData ? (
          <Calendar medicineData={medicineData} moodData={moodData} />
        ) : (
          <DummyCalendar />
        )}
      </div>
      <p className="font-light w-screen mt-5 text-xl text-dark-pink text-left pl-10">
        Graph - <span className="text-amber-500">Mood</span>
      </p>
      <p className="font-light w-screen mt-2 mb-2 text-sm text-dark-pink text-left pl-10 pr-10">
        This graph will show the changes in your mood, with respect to time.
        <p>
          Level 5 - <span className="text-green-400">Good</span>
        </p>
        <p>
          Level 3 - <span className="text-yellow-400">Neutral</span>
        </p>
        <p>
          Level 1 - <span className="text-red-400">Bad</span>
        </p>
      </p>
      <div className="h-max w-11/12 bg-white rounded-xl drop-shadow-xl mb-2">
        {moodData ? <Graph moodData={moodData} /> : <DummyGraph />}
      </div>
      <p className="font-light w-screen mt-5 text-xl text-dark-pink text-left pl-10">
        Graph - <span className="text-teal-500">Medicine Dose</span>
      </p>
      <p className="font-light w-screen mt-2 mb-2 text-sm text-dark-pink text-left pl-10 pr-10">
        This graph will show your medicine intake, with respect to time.
      </p>
      <div className="h-max w-11/12 bg-white rounded-xl drop-shadow-xl mb-10">
        {medicineData ? (
          <MedGraph medicineData={medicineData} />
        ) : (
          <DummyMedGraph />
        )}
      </div>
    </div>
  );
};

export default Home;
