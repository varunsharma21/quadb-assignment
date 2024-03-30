import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "./../features/todo/todoSlice";
import styles from "./AddTodo.module.css";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTaskHandler = (e) => {
    e.preventDefault();

    // Checking if empty string is not been added to todos.
    if (input !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className={styles["to-do-form"]}>
      <form onSubmit={addTaskHandler}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={addTaskHandler} variant="contained">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default AddTodo;
