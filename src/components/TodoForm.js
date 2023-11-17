import React, { useState } from "react";
import { Modal, Center } from "@mantine/core";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const [update, setUpdate] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    if (props.editMode) setUpdate(e.target.value)
    else setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    // makes the to do invisible.
    setInput("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // makes the to do invisible.
    setUpdate("");
    props.setEditMode(false);

    props.onSubmit({
      id: props.edit.id,
      text: update,
    });
  }

  return (
      <>
        <Modal opened={props.editMode} title={'Update Task'} size={'lg'} onClose={() => props.setEditMode(false)} centered>
          <Center>
            <input
              type="text"
              placeholder="update your item "
              value={update}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              style={{ color: props.colorScheme === "dark" ? "white" : "black"}}
            />
            <button className="todo-button edit" onClick={handleUpdate}>update</button>
          </Center>
        </Modal>
        <form className="todo-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Add a todo"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              style={{ color: props.colorScheme === "dark" ? "white" : "black"}}
            />
            <button className="todo-button">Add todo</button>
          </div>
        </form>
      </>
  );
}

export default TodoForm;
