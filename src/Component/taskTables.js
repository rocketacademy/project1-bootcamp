import Table from "react-bootstrap/Table";

// - `filterTask` filter button
//     - selectable tags
// - `sortTask` priority sort button
//     - to sort high med low
// - `toggleCompletedTask` show/hide completed tasks button
//     - on click, change state for completed tasks, to style based on whether to show or hide

function TaskTables(props) {
  return (
    <Table hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>{task.category}</td>
            <td>{task.priority}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TaskTables;