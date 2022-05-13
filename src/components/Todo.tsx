import { TodoProvider } from "../context/TodoProvider";
import { Title } from "./Title";
import { TodoList } from "./TodoList";

export const Todo = () => {
  return (
    <TodoProvider>
      <div>
        <Title />
        <TodoList />
      </div>
    </TodoProvider>
  );
};
