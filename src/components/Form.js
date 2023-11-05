import React, { useState } from "react";
import Button from "./Button";
import ToDoList from "./TodoList";

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

  const deleteFriends = (todoIndex) => {
    const newTodos = items.filter((_, index) => index !== todoIndex);
    setItems(newTodos);
  };

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
        <Button value="Add" onClick={addFriends} />
        <ToDoList toDoList={items} deleteFriends={deleteFriends} />
        <Button value="Create trip!" />
      </form>
    </>
  );
};

export default Form;
