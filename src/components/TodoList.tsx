import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoList = () => {
  const context = useContext(TodoContext);

  return (
    <ul>
      <li>TODO 1</li>
      <li>TODO 2</li>
      <li>TODO 3</li>
    </ul>
  );
};
