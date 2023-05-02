import React from "react";
import { useState } from "react";
import "./App.css";
import NewTask from "./Component/NewTask";
import TaskTables from "./Component/TaskTables";

// created an array of objects to store tasks and details relating to the tasks
const existingTasks = [
  {
    id: 1,
    name: "Apple",
    description: "Sell Macbook Air",
    category: "Personal",
    priority: "Medium",
  },
];

function App() {
  const [tasks, setTasks] = useState(existingTasks);

  // created a 'addTask' function that adds a new task to the list of existing tasks
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      {/* passed the function 'addTask' as a prop to the child component 'AddNewTask' */}
      <NewTask addTask={addTask} />
      <TaskTables tasks={tasks} />
    </div>
  );
}

export default App;

// Original App.js code - to delete the above and uncomment the below before pushing local changes to remote repo & merging to main branch
// import React from "react";
// import logo from "./logo.png";
// import "./App.css";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
