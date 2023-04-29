import React, { useState, useEffect } from "react";
import { BackButton, FormMedicine } from "../components ";
import { Link, NavLink, Router, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Medicine = () => {
  const [medicineName, setMedicineName] = useState("");
  const [medicineQtyOne, setMedicineQtyOne] = useState("");
  const [medicineDate, setMedicineDate] = useState("");
  const [medicineTime, setMedicineTime] = useState("");
  const [medicineQtyTotal, setMedicineQtyTotal] = useState("");
  const [medicineDose, setMedicineDose] = useState("");
  const [medicineInterval, setMedicineInterval] = useState("");
  const [medicineStartDate, setMedicineStartDate] = useState("");
  const [medicineStartTime, setMedicineStartTime] = useState("");

  const [itemData, setItemData] = useState({});

  // const navigate = useNavigate();

  const [medicineLog, setMedicineLog] = useLocalStorage("medicineLog", []);

  const handleMedNameChange = (e) => {
    setMedicineName(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleMedQtyOneChange = (e) => {
    setMedicineQtyOne(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleMedDateChange = (e) => {
    setMedicineDate(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleMedTimeChange = (e) => {
    setMedicineTime(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleMedQtyTotalChange = (e) => {
    setMedicineQtyTotal(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleMedDoseChange = (e) => {
    setMedicineDose(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleMedIntervalChange = (e) => {
    setMedicineInterval(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleMedStartDateChange = (e) => {
    setMedicineStartDate(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleMedStartTimeChange = (e) => {
    setMedicineStartTime(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMedicineLog([...medicineLog, itemData]);
    setItemData({});
    // navigate("/home");
  };

  // useEffect(() => {
  //   localStorage.setItem("dataMedicine", JSON.stringify(dataMedicine));
  // }, [dataMedicine]);

  // console.log(dataMedicine)

  return (
    <div className="base-container-secondary">
      <BackButton />
      <p className="font-light w-screen mt-2 text-3xl text-dark-pink text-left pl-10">
        Medicine
      </p>
      <FormMedicine
        medicineName={medicineName}
        medicineQtyOne={medicineQtyOne}
        medicineDate={medicineDate}
        medicineTime={medicineTime}
        medicineQtyTotal={medicineQtyTotal}
        medicineDose={medicineDose}
        medicineInterval={medicineInterval}
        medicineStartDate={medicineStartDate}
        medicineStartTime={medicineStartTime}
        onNameChange={handleMedNameChange}
        onQtyOneChange={handleMedQtyOneChange}
        onDateChange={handleMedDateChange}
        onTimeChange={handleMedTimeChange}
        onQtyTotalChange={handleMedQtyTotalChange}
        onDoseChange={handleMedDoseChange}
        onIntervalChange={handleMedIntervalChange}
        onDateStartChange={handleMedStartDateChange}
        onTimeStartChange={handleMedStartTimeChange}
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

export default Medicine;
