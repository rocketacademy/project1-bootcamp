import React from 'react';
import './App.css';
import { useState } from 'react';
import { Task } from './Task';
import { Container } from 'react-bootstrap';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
    // alert(`${this.state.task} ${this.state.duration}`);
    // event.preventDefault();
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      started: false,
    };

    setToDoList([...toDoList, task]);
    console.log(newTask);
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
          <input onChange={handleChange} />
          <input type='number' />
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
                taskName={task.taskName}
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
      </Container>
    </div>
  );
}

export default App;
