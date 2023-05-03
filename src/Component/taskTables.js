import Table from "react-bootstrap/Table";

// - `filterTask` filter button
//     - selectable tags
// - `sortTask` priority sort button
//     - to sort high med low
// - `toggleCompletedTask` show/hide completed tasks button
//     - on click, change state for completed tasks, to style based on whether to show or hide

export default function TaskTables(props) {
  return (
    <Table hover size="sm" >
      <thead>
        <tr>
          <th style={{ verticalAlign: "middle", textAlign: "center" }}>
            Done?
          </th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map((task) => {
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
                <td>{task.description}</td>
                <td>{task.category}</td>
                <td>{task.priority}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </Table>
  );
}
