import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // If todos available then get those else empty todos array
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

// Creating a slice which contains all the reducers required.
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // here we not only declare function but also define it.
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
