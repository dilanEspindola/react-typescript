import { TodoProvider } from "../context/TodoProvider";
import { TodoList } from "./TodoList";

export const Todo = () => {
  return (
    <TodoProvider>
      <div>
        <h1>todo:</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
};
