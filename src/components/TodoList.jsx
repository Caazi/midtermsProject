import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => setNewTodo(event.target.value);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
  };

  return (
    <div>
      <h1 className="todo-title">To-do List</h1>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
