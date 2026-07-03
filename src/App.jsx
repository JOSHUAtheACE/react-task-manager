import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import Stats from "./components/Stats";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("Todo");
  const [priority, setPriority] = useState("Low");
  const [search, setSearch] = useState("");

  function addTask() {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        title: task,
        status: status,
        priority: priority,
      },
    ]);

    setTask("");
    setStatus("Todo");
    setPriority("Low");
    
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  const filteredTasks = tasks.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  function clearAll() {
  setTasks([]);
}

  return (
    <div className="container">
      <h1>📋 Project Task Manager</h1>

      <Stats tasks={tasks} />

      <div className="top-section">
        <div className="left-panel">
          <TaskForm
            task={task}
            setTask={setTask}
            status={status}
            setStatus={setStatus}
            priority={priority}
            setPriority={setPriority}
            addTask={addTask}
          />
        </div>

        <div className="right-panel">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
      />
      <button
  className="clear-btn"
  onClick={clearAll}
>
  🗑 Clear All Tasks
</button>
    </div>
  );
}

export default App;