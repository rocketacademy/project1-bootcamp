import React, { useState, useEffect } from "react";
import { Button, Form } from "../components ";
import { Link, NavLink } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Registration = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [medicalConditions, setMedicalConditions] = useState("");
  const [allergies, setAllergies] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emer1Name, setEmer1Name] = useState("");
  const [emer1Phone, setEmer1Phone] = useState("");
  const [emer1Email, setEmer1Email] = useState("");
  const [emer2Name, setEmer2Name] = useState("");
  const [emer2Phone, setEmer2Phone] = useState("");
  const [emer2Email, setEmer2Email] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [itemData, setItemData] = useState({});

  // const navigate = useNavigate();

  const [profileLog, setProfileLog] = useLocalStorage("profileLog", []);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleBloodTypeChange = (e) => {
    setBloodType(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleMedConditionsChange = (e) => {
    setMedicalConditions(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleAllergiesChange = (e) => {
    setAllergies(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleEmer1NameChange = (e) => {
    setEmer1Name(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleEmer1PhoneChange = (e) => {
    setEmer1Phone(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleEmer1EmailChange = (e) => {
    setEmer1Email(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleEmer2NameChange = (e) => {
    setEmer2Name(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleEmer2PhoneChange = (e) => {
    setEmer2Phone(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleEmer2EmailChange = (e) => {
    setEmer2Email(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileLog([...profileLog, itemData]);
    setItemData({});
    // navigate("/home");
  };

  // console.log(dataProfile)

  return (
    <div className="base-container">
      <p className="font-light w-screen mt-10 text-3xl text-dark-pink text-left pl-10">
        Welcome
      </p>
      <p className="font-light w-screen text-xl text-dark-pink text-left pl-10">
        Let us know more about you!
      </p>
      <Form
        name={name}
        age={age}
        weight={weight}
        bloodType={bloodType}
        medicalConditions={medicalConditions}
        allergies={allergies}
        phone={phone}
        email={email}
        emer1Name={emer1Name}
        emer1Phone={emer1Phone}
        emer1Email={emer1Email}
        emer2Name={emer2Name}
        emer2Phone={emer2Phone}
        emer2Email={emer2Email}
        userName={userName}
        password={password}
        onNameChange={handleNameChange}
        onAgeChange={handleAgeChange}
        onWeightChange={handleWeightChange}
        onBloodTypeChange={handleBloodTypeChange}
        onMedConditionsChange={handleMedConditionsChange}
        onAllergiesChange={handleAllergiesChange}
        onPhoneChange={handlePhoneChange}
        onEmailChange={handleEmailChange}
        onEmer1NameChange={handleEmer1NameChange}
        onEmer1PhoneChange={handleEmer1PhoneChange}
        onEmer1EmailChange={handleEmer1EmailChange}
        onEmer2NameChange={handleEmer2NameChange}
        onEmer2PhoneChange={handleEmer2PhoneChange}
        onEmer2EmailChange={handleEmer2EmailChange}
        onUserNameChange={handleUserNameChange}
        onPasswordChange={handlePasswordChange}
      />
      <button
        onClick={handleSubmit}
        className="text-xl p-3 m-4 w-60 bg-dark-pink drop-shadow-lg hover:drop-shadow-xl hover:bg-pink-700 rounded-xl"
      >
        <Link to="/home">Record</Link>
      </button>
      <Link to="/home">
        <Button value="To Main" />
      </Link>
    </div>
  );
};

export default Registration;
