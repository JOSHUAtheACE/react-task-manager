function TaskCard({ task, index, deleteTask }) {
  return (
    <div className="task-card">

      <h3>{task.title}</h3>

      <p>
        Status :
        <span className="badge">
          {task.status}
        </span>
      </p>

     <p>
  Priority :
  <span
    className="badge"
    style={{
      backgroundColor:
        task.priority === "High"
          ? "#fee2e2"
          : task.priority === "Medium"
          ? "#fef3c7"
          : "#dcfce7",

      color:
        task.priority === "High"
          ? "#dc2626"
          : task.priority === "Medium"
          ? "#d97706"
          : "#15803d",
    }}
  >
    {task.priority}
  </span>
</p>

      <button
        className="delete-btn"
        onClick={() => deleteTask(index)}
      >
        Delete
      </button>

    </div>
  );
}

export default TaskCard;