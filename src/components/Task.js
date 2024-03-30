/* This is the Task component which shows the todo. */
/* This can be deleted by clicking on the bin icon */

// I have commented the code for deleting the todo. Instead I have coded for marking todo completed.
// You can find both code below.

import React, { useState } from "react";
import styles from "./Task.module.css";
import { removeTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import deleteIcon from "./../assets/bin.png";

const Task = ({ task, id }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();

  const onCompleteHandler = () => {
    setIsCompleted((prev) => !prev);
    console.log(isCompleted);
  };

  return (
    <div className={styles.container}>
      {!isCompleted && <p className={styles.task}>{task}</p>}
      {isCompleted && <p className={styles["task-completed"]}>{task} ✅</p>}
      {!isCompleted && (
        <img
          src={deleteIcon}
          alt="delete"
          // For deleting the todo.
          // onClick={() => dispatch(removeTodo({ id: id }))}

          // For marking the todo completed without deleting.
          onClick={onCompleteHandler}
        />
      )}
    </div>
  );
};

export default Task;
