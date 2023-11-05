import React from "react";

const ToDoList = ({ toDoList, deleteFriends }) => {
  return (
    <>
      <ul>
        {toDoList.map((todo, index) => (
          <>
            <li key={index.toString()}>{todo}</li>
            <button type="button" onClick={() => deleteFriends(index)}>
              Delete
            </button>
          </>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
