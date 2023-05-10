import React from 'react';
import './App.css';
import { useState } from 'react';
import { Task } from './Task';
import { Container } from 'react-bootstrap';
import Stopwatch from './components/Stopwatch';

function App() {
  const [toDoList, setToDoList] = useState([]); // name task, duration, state, dictionary
  const [newTask, setNewTask] = useState({
    name: '',
    duration: 0,
  }); // to store values of new task in inputfield

  console.table(toDoList);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setNewTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      name: newTask.name,
      duration: newTask.duration,
      started: false,
    };

    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) => {
    const newToDoList = toDoList.filter((task) => {
      return task.id !== id;
    });
    setToDoList(newToDoList);
  };

  const startTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, started: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className='App'>
      <Container>
        <div>
          <h1>Register Time</h1>
          <label>Task Name: </label>
          <input name='name' onChange={handleChange} />
          <label>Duration: </label>
          <input name='duration' type='number' onChange={handleChange} />
          <button onClick={addTask} className='btn'>
            Add Task
          </button>
        </div>
      </Container>
      <br />
      <Container>
        <h1>Cooking Tasks</h1>
        <div className='list'>
          {toDoList.map((task) => {
            return (
              <Task
                taskName={task.name}
                id={task.id}
                deleteTask={deleteTask}
                started={task.started}
                startTask={startTask}
              />
            );
          })}
        </div>
      </Container>
      <br />
      <Container>
        <h1>Timers Running</h1>
        {toDoList.map((task) => {
          if (task.started) {
            // convert task.duration from minutes to seconds
            const timeInSeconds = task.duration * 60;

            return (
              <div key={task.id}>
                <Stopwatch
                  id={task.id}
                  name={task.name}
                  setTime={timeInSeconds}
                />
              </div>
            );
          }
        })}
      </Container>
    </div>
  );
}

export default App;
