import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodos();
  return (
    <ul>
      {todos.map((task) => (
        <TodoItem key={task.id} tasks={task} />
      ))}
    </ul>
  );
};
