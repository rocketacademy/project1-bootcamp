import React, { useState } from "react";

const Form = (props) => {
  return (
    <div>
      <form className="grid grid-cols-1 gap-3 text-xl text-dark-pink text-left font-light p-3 m-1 w-80 bg-white drop-shadow-lg rounded-xl">
        <label>Name:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="name"
          required
          placeholder="John Doe"
          value={props.name}
          onChange={props.onNameChange}
          name="name"
        />
        <label>Age:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="number"
          min="0"
          max="120"
          id="age"
          required
          placeholder="60"
          value={props.age}
          onChange={props.onAgeChange}
          name="age"
        />
        <label>Weight:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="number"
          min="0"
          max="200"
          id="weight"
          required
          placeholder="60"
          value={props.weight}
          onChange={props.onWeightChange}
          name="weight"
        />
        <label>Blood Type:</label>
        <select
          className="border-solid border-2 border-dark-pink rounded focus:ring-blue-500 focus:border-blue-500 block w-full"
          id="bloodtype"
          required
          value={props.bloodType}
          onChange={props.onBloodTypeChange}
          name="bloodtype"
        >
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <label>Medical Conditions:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="medical"
          required
          placeholder="hypertension, etc."
          value={props.medicalConditions}
          onChange={props.onMedConditionsChange}
          name="medicalConditions"
        />
        <label>Allergies:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="allergies"
          required
          placeholder="food, medication, etc."
          value={props.allergies}
          onChange={props.onAllergiesChange}
          name="allergies"
        />
        <label for="phone">Phone Number:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="tel"
          id="phone"
          name="phone"
          pattern="+65[0-9]{8}"
          required
          placeholder="6591111111"
          value={props.phone}
          onChange={props.onPhoneChange}
        />
        <label for="email">Email Address:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="email"
          id="email"
          name="email"
          required
          placeholder="John_Doe@gmail.com"
          value={props.email}
          onChange={props.onEmailChange}
        />
        <label>Emergency Contact 1:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="contact1"
          required
          placeholder="John Doe"
          value={props.emer1Name}
          onChange={props.onEmer1NameChange}
          name="emer1Name"
        />
        <label for="contact1num">Contact 1 Phone Number:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="tel"
          id="contact1num"
          pattern="+65[0-9]{8}"
          required
          placeholder="6591111111"
          value={props.emer1Phone}
          onChange={props.onEmer1PhoneChange}
          name="emer1Phone"
        />
        <label for="contact1email">Contact 1 Email Address:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="email"
          id="contact1email"
          required
          placeholder="John_Doe@gmail.com"
          value={props.emer1Email}
          onChange={props.onEmer1EmailChange}
          name="emer1Email"
        />
        <label>Emergency Contact 2:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="contact2"
          required
          placeholder="John Doe"
          value={props.emer2Name}
          onChange={props.onEmer2NameChange}
          name="emer2Name"
        />
        <label for="contact2num">Contact 2 Phone Number:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="tel"
          id="contact2num"
          pattern="+65[0-9]{8}"
          required
          placeholder="6591111111"
          value={props.emer2Phone}
          onChange={props.onEmer2PhoneChange}
          name="emer2Phone"
        />
        <label for="email">Contact 2 Email Address:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="email"
          id="contact2email"
          required
          placeholder="John_Doe@gmail.com"
          value={props.emer2Email}
          onChange={props.onEmer2EmailChange}
          name="emer2Email"
        />
        <label>Username:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="username"
          required
          placeholder="abcde"
          value={props.userName}
          onChange={props.onUserNameChange}
          name="userName"
        />
        <label>Password:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="text"
          id="password"
          required
          placeholder="abcde"
          value={props.password}
          onChange={props.onPasswordChange}
          name="password"
        />
      </form>
      {/* <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.weight}</p>
      <p>{props.bloodType}</p>
      <p>{props.medicalConditions}</p>
      <p>{props.allergies}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <p>{props.emer1Name}</p>
      <p>{props.emer1Phone}</p>
      <p>{props.emer1Email}</p>
      <p>{props.emer2Name}</p>
      <p>{props.emer2Phone}</p>
      <p>{props.emer2Email}</p>
      <p>{props.userName}</p>
      <p>{props.password}</p> */}
    </div>
  );
};

export default Form;
