import React from "react";

function TodoContent(props) {
  return (
    <div className="todo-content">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default TodoContent;
