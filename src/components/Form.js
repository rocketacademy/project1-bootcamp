import React, { useState, useEffect } from "react";
import Button from "./Button";
import FriendList from "./FriendList";

const Form = () => {
  const [tripname, setTripname] = useState("");
  const [friends, setFriends] = useState("");
  const [items, setItems] = useState([]);

  const addFriends = () => {
    if (friends.length) {
      setItems([...items, friends]);
      setFriends("");
    }
  };

  const deleteFriends = (itemIndex) => {
    const newItem = items.filter((_, index) => index !== itemIndex);
    setItems(newItem);
  };

  useEffect(() => {
    let stateObject = {
      tripname: tripname,
      items: items,
    };

    localStorage.setItem("stateObject", JSON.stringify(stateObject));
  }, [tripname, items]);

  return (
    <>
      <form>
        <label>Trip name:</label>
        <input
          type="text"
          onChange={(event) => setTripname(event.target.value)}
          value={tripname}
          placeholder="Enter your trip name"
          name="tripname"
        />
        <p></p>
        <label>Friend: </label>
        <input
          type="text"
          name="friend"
          onChange={(event) => setFriends(event.target.value)}
          value={friends}
          placeholder="Enter friends' name"
        />
        <Button onClick={addFriends}>Add</Button>
        <FriendList friendList={items} deleteFriends={deleteFriends} />
      </form>
    </>
  );
};

export default Form;
