import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state is empty initially.
const initialState = {
  todos: [],
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
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
