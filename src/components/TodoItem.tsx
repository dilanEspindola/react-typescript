import { Todo } from "../interfaces/interfaces";
import { useTodos } from "../hooks/useTodos";

interface props {
  tasks: Todo;
}

export const TodoItem = ({ tasks }: props) => {
  const { toggleTodo } = useTodos();

  return (
    <div>
      <li
        onDoubleClick={() => toggleTodo(tasks.id)}
        style={{
          cursor: "pointer",
          textDecoration: tasks.completed ? "line-through" : "none",
        }}
      >
        {tasks.desc}
      </li>
    </div>
  );
};
