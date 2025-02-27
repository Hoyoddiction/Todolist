import { useState } from "react";
import TodoWrapper from "./TodoWrapper";
import "./app.css";

export default function App() {
  return (
    <div className="app-container">
      <h1 className="title">My To-Do List</h1>
      <TodoWrapper />
    </div>
  );
}
