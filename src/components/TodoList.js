import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { ColorSchemeProvider, MantineProvider, ActionIcon, Group, Title, Center } from '@mantine/core'
import { MoonStars, Sun } from 'tabler-icons-react';

import { useLocalStorage } from "@mantine/hooks";

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

	const [colorScheme, setColorScheme] = useLocalStorage({
		key: 'mantine-color-scheme',
		defaultValue: 'dark',
		getInitialValueInEffect: true,
	});
	const toggleColorScheme = () => {
		setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    console.log(colorScheme);
  }

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
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
				theme={{ colorScheme, defaultRadius: 'md' }}
				withGlobalStyles
				withNormalizeCSS>
      <div style={{textAlign: "center", padding: "18px", maxWidth: "800px", margin: "auto"}}>
        <Center>
          <Group>
            <Title>What's the Plan for Today?</Title>
            <ActionIcon
              color={'blue'}
              onClick={() => toggleColorScheme()}
              size='lg'>
              {colorScheme === 'dark' ? (
                <Sun size={16} />
              ) : (
                <MoonStars size={16} />
              )}
            </ActionIcon>
          </Group>
        </Center>
        <div style={{marginTop: "36px", marginBottom: "48px"}}>
          <TodoForm onSubmit={addTodo} colorScheme={colorScheme}/>
        </div>
        <div style={{border: "1px solid", borderRadius: "6px", paddingTop: "24px", paddingBottom: "24px"}}>
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodos}
          />
        </div>
      </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default TodoList;
