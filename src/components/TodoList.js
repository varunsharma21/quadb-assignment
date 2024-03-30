import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import styles from "./TodoList.module.css";

const TodoList = () => {
  // Fetching the todos array using useSelector hook.
  const todos = useSelector((state) => state.todos);

  return (
    <div className={styles.container}>
      {/* Showing all the tasks by iterating on the todos array. */}
      {todos.map((todo) => (
        <Task task={todo.text} id={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
