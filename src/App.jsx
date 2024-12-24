import React, { useState, useEffect } from "react";

import "./App.css";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import TaskForm from "./components/TaskForm";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const handleTaskReorder = (updatedTasks) => {
    setTasks(updatedTasks); // Update task order in the state
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          handleTaskReorder={handleTaskReorder} // Pass handler to reorder tasks
        />
      </main>
    </div>
  );
};

export default App;
