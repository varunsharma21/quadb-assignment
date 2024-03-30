/* Rendering all the components wrapped inside the Provider. */

import "./App.css";
import AddTodo from "./components/AddTodo";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
