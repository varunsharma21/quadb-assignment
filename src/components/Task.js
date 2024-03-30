/* This is the Task component which shows the todo. */
/* This can be deleted by clicking on the bin icon */

import React from "react";
import styles from "./Task.module.css";
import { removeTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import deleteIcon from "./../assets/bin.png";

const Task = ({ task, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.task}>{task}</p>
      <img
        src={deleteIcon}
        alt="delete"
        onClick={() => dispatch(removeTodo({ id: id }))}
      />
    </div>
  );
};

export default Task;
