import { useState } from "react";
import Table from "react-bootstrap/Table";
import SortTable from "./SortTable";

function TaskTables(props) {
  const { tasks } = props;
  const { items, requestSort } = SortTable(tasks);

  // add state variable for expanded task
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  const tableData = items.flatMap((task) => {
    if (props.showHide && task.completed) {
      return [];
    } else {
      const isExpanded = expandedTaskId === task.id;
      return [
        <tr
          key={task.id}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
          onClick={
            () =>
              isExpanded ? setExpandedTaskId(null) : setExpandedTaskId(task.id) // toggle expanded task
          }
        >
          <td style={{ verticalAlign: "middle", textAlign: "center" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => props.handleCheckboxChange(task.id)}
            />
          </td>
          <td>{task.name}</td>
          <td>{task.category}</td>
          <td style={{ verticalAlign: "middle", textAlign: "center" }}>
            {task.priority}
          </td>
        </tr>,
        isExpanded && ( // add extra row if task is expanded
          <tr key={`${task.id}-extra`}>
            <td></td>
            <td colSpan="3">
              <div
                style={{
                  fontWeight: 540,
                  fontStyle: "italic",
                }}
              >
                {task.description}
              </div>
            </td>
          </tr>
        ),
      ];
    }
  });

  return (
    <Table hover size="sm">
      <thead>
        <tr>
          <th style={{ verticalAlign: "middle", textAlign: "center" }}>
            Done?
          </th>
          <th>
            <button type="button" onClick={() => requestSort("name")}>
              Task{" "}
            </button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("category")}>
              Category{" "}
            </button>
          </th>
          <th style={{ verticalAlign: "middle", textAlign: "center" }}>
            <button type="button" onClick={() => requestSort("priority")}>
              Priority{" "}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </Table>
  );
}

export default TaskTables;
