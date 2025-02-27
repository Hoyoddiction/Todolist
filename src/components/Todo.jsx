import React from "react";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-200">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
      >
        {todo.task}
      </p>
      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onClick={() => deleteTodo(todo.id)}>
        X
      </button>
    </div>
  );
};

export default Todo;
