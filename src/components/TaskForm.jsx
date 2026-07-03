function TaskForm({
  task,
  setTask,
  status,
  setStatus,
  priority,
  setPriority,
  addTask,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Todo</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;