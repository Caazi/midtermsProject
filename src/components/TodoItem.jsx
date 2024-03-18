import React from "react";

const TodoItem = ({ index, todo, removeTodo }) => {
  return (
    <div className="todo-item">
      <span>{todo}</span>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;
