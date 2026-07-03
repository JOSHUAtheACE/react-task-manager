import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {
  return (
    <div>

      <h2>Tasks ({tasks.length})</h2>

      {tasks.length === 0 ? (
        <p className="no-task">No Tasks Found</p>
      ) : (
        <div className="task-grid">
          {tasks.map((item, index) => (
            <TaskCard
              key={index}
              task={item}
              index={index}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;