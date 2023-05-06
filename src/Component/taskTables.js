import Table from "react-bootstrap/Table";
import SortTable from "./SortTable";

// - `filterTask` filter button
//     - selectable tags
// - `sortTask` priority sort button
//     - to sort high med low
// - `toggleCompletedTask` show/hide completed tasks button
//     - on click, change state for completed tasks, to style based on whether to show or hide

function TaskTables(props) {
  const { tasks } = props;
  const { items, requestSort } = SortTable(tasks);

  const tableData = items.map((task) => {
    if (props.showHide && task.completed) {
      return null;
    } else {
      return (
        <tr
          key={task.id}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          <td style={{ verticalAlign: "middle", textAlign: "center" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => props.handleCheckboxChange(task.id)}
            />
          </td>
          <td>{task.name}</td>
          {/* <td>{task.description}</td> */}
          <td>{task.category}</td>
          <td style={{ verticalAlign: "middle", textAlign: "center" }}>
            {task.priority}
          </td>
        </tr>
      );
    }
  });

  return (
    <Table hover size="sm">
      <thead>
        <tr>
          <th style={{ verticalAlign: "middle", textAlign: "center" }}>✅</th>
          <th>
            <button type="button" onClick={() => requestSort("name")}>
              Task{" "}
            </button>
          </th>
          {/* <th>
            <button type="button" onClick={() => requestSort("description")}>
              Description{" "}
            </button>
          </th> */}
          <th>
            <button type="button" onClick={() => requestSort("category")}>
              Category{" "}
            </button>
          </th>
          <th style={{ verticalAlign: "middle", textAlign: "center" }}>
            <button type="button" onClick={() => requestSort("priority")}>
              ❗{" "}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </Table>
  );
}

export default TaskTables;
