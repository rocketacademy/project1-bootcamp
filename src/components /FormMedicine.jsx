import React, { useState } from "react";

const FormMedicine = (props) => {
  return (
    <div>
      <form className="grid grid-cols-1 gap-3 text-xl text-dark-pink text-left font-light p-3 m-1 w-80 bg-white drop-shadow-lg rounded-xl">
        <label>Medicine:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="medicine-name"
          required
          placeholder="Panadol 200 mg"
          value={props.medicineName}
          onChange={props.onNameChange}
          name="medicineName"
        />
        <label>Qty for this intake:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="number"
          min="0"
          max="10"
          id="medicine-qty"
          placeholder="0"
          value={props.medicineQtyOne}
          onChange={props.onQtyOneChange}
          name="medicineQtyOne"
        />
        <label>Date:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="date"
          id="medicine-date"
          placeholder=""
          value={props.medicineDate}
          onChange={props.onDateChange}
          name="medicineDate"
        />
        <label>Time:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="time"
          id="medicine-time"
          placeholder=""
          value={props.medicineTime}
          onChange={props.onTimeChange}
          name="medicineTime"
        />
        <fieldset>
          <legend className="mb-5">For Regular Intake:</legend>
          <div className="flex align-start text-sm placeholder:justify-around flex-wrap gap-3">
            <div>
              <label>Total Qty:</label>
              <input
                className=" border-dark-pink border-2 rounded"
                type="number"
                min="0"
                max="500"
                id="medicine-total-qty"
                value={props.medicineQtyTotal}
                onChange={props.onQtyTotalChange}
                name="medicineQtyTotal"
                placeholder="0"
              />
              <span>Pills</span>
            </div>
            <div>
              <label>Dose:</label>
              <input
                className=" border-dark-pink border-2 rounded"
                type="number"
                min="0"
                max="20"
                id="medicine-dose"
                value={props.medicineDose}
                onChange={props.onDoseChange}
                name="medicineDose"
                placeholder="0"
              />
              <span>Pills Per Day</span>
            </div>
            <div>
              <label>Intervals:</label>
              <input
                className=" border-dark-pink border-2 rounded"
                type="number"
                min="1"
                max="12"
                id="medicine-interval"
                value={props.medicineInterval}
                onChange={props.onIntervalChange}
                name="medicineInterval"
                placeholder="0"
              />
              <span>Hourly</span>
            </div>
            <div>
              <label>Start Date:</label>
              <input
                className="border-solid border-2 border-dark-pink rounded"
                type="date"
                id="medicine-start-date"
                placeholder=""
                value={props.medicineStartDate}
                onChange={props.onDateStartChange}
                name="medicineStartDate"
              />
            </div>
            <div>
              <label>Start Time:</label>
              <input
                className="border-solid border-2 border-dark-pink rounded"
                type="time"
                id="medicine-start-time"
                placeholder=""
                value={props.medicineStartTime}
                onChange={props.onTimeStartChange}
                name="medicineStartTime"
              />
            </div>
          </div>
        </fieldset>
      </form>
      {/* <p>{props.medicineName}</p>
      <p>{props.medicineQtyOne}</p>
      <p>{props.medicineDate}</p> 
      <p>{props.medicineTime}</p>
      <p>{props.medicineQtyTotal}</p>
      <p>{props.medicineDose}</p>
      <p>{props.medicineInterval}</p>  
      <p>{props.medicineStartDate}</p>
      <p>{props.medicineStartTime}</p> */}
    </div>
  );
};

export default FormMedicine;
