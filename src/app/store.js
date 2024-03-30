/* Making store which contains the reducers which will then be given to Provider as 'store' */

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
