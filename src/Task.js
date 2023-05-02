export const Task = (props) => {
  return (
    <div
      className='task'
      style={{
        backgroundColor: props.started ? '#edf6f9' : 'inherit',
      }}
    >
      <h2>{props.taskName}</h2>

      <button onClick={() => props.startTask(props.id)} className='btn'>
        Start Task
      </button>
      <button onClick={() => props.deleteTask(props.id)} className='btn'>
        Delete Task
      </button>
    </div>
  );
};
