import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({
  title,
  tasks,
  status,
  handleDelete,
  handleTaskReorder,
}) => {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const onDragStart = (index) => {
    setDraggedIndex(index);
  };

  const onDragOver = (index, e) => {
    e.preventDefault(); // Prevent default to allow drop
    if (index !== draggedIndex) {
      const updatedTasks = [...tasks];
      const [draggedTask] = updatedTasks.splice(draggedIndex, 1); // Remove dragged item
      updatedTasks.splice(index, 0, draggedTask); // Insert dragged task at the new position
      handleTaskReorder(updatedTasks); // Update the state
      setDraggedIndex(index); // Update draggedIndex to the new position
    }
  };

  const onDrop = () => {
    setDraggedIndex(null); // Reset dragged index on drop
  };

  return (
    <section className="task_column">
      <h2 className="task_column_heading">{title}</h2>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
