import React, { useState } from "react";
import Button from "./Button";
import PriceDescriptionList from "./PriceDescriptionList";

const ItemForm = (props) => {
  const [payer, setPayer] = useState([props.friendsName[0]]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState([]);

  let changes = {
    description: description,
    price: price,
    payer: payer,
  };

  console.log(details);

  const addItems = () => {
    let storage = [];
    if (description.length && price.length) {
      console.log(details);
      setDetails([...details, changes]);
      console.log(details);
      setPayer([props.friendsName[0]]);

      setDescription("");
      setPrice("");
    }

    JSON.parse(localStorage.getItem("transactions"));

    storage.push(...details, changes);
    localStorage.setItem("transactions", JSON.stringify(storage));
    localStorage.getItem("transactions");
  };

  const deleteItems = (detailIndex) => {
    const newDetails = details.filter((_, index) => index !== detailIndex);
    setDetails(newDetails);
  };

  return (
    <>
      <h6>Item description: </h6>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="description"
      />
      <h6>Price:</h6>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        name="price"
      />
      <p></p>
      <select
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
        name="payer"
      >
        {props.friendsName.map((name, index) => (
          <option key={index}>{name}</option>
        ))}
      </select>{" "}
      <p>paid</p>
      <Button onClick={addItems}>Add</Button>
      <PriceDescriptionList details={details} deleteItems={deleteItems} />
    </>
  );
};

export default ItemForm;
