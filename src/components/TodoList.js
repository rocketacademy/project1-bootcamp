import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { MantineProvider, ColorSchemeProvider,ColorScheme,} from "@mantine/core";

import { useColorScheme } from "@mantine/hooks";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      id: 1,
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      id: 2,
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      id: 3,
      isCompleted: false,
    },
  ]);
const preferredColorScheme = useColorScheme();
const [colorScheme, setColorScheme] = useLocalStorage({

  const toggleColorScheme = value =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useHotkeys([['mod+J', () => toggleColorScheme()]]);
  key: "mantine-color-scheme",
  defaultValue: "light",
  getInitialValueInEffect: true,
});

  //
  const addTodo = (todo) => {
    console.log(todo);
    // if (!todo.text || /^|s*$/.test(todo.text)) {
    //   return;
    // }
    let id = todos.length + 1;
    todo.id = id;

    const newTodos = [todo, ...todos];
    console.log(newTodos);
    setTodos(newTodos);
  };

  const updateTodos = (todoId, newValue) => {
    console.log(newValue);
    console.log(todoId);
    console.log(todos);
    newValue.id = todoId.id;
    // if (!newValue || /^|s*$/.test(newValue.text)) {
    //   return;
    // }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId.id ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodos}
      />
    </div>
  );
}

export default TodoList;
