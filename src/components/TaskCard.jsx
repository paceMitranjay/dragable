import React from "react";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({
  title,
  tags,
  handleDelete,
  index,
  onDragStart,
  onDragOver,
  onDrop,
}) => {
  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => onDragStart(index)} // Set dragged index
      onDragOver={(e) => onDragOver(index, e)} // Allow dragging over other cards
      onDrop={onDrop} // Reset dragged index after drop
    >
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags &&
            tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="Delete task" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
