function Stats({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Todo"
  ).length;

  return (
    <div className="stats">
      <div className="stat-box">
        <h2>{total}</h2>
        <p>Total</p>
      </div>

      <div className="stat-box">
        <h2>{completed}</h2>
        <p>Completed</p>
      </div>

      <div className="stat-box">
        <h2>{pending}</h2>
        <p>Pending</p>
      </div>
    </div>
  );
}

export default Stats;