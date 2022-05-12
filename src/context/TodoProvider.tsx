import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "../interfaces/todoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      desc: "aprender react",
      completed: false,
    },
    {
      id: "1",
      desc: "hacer sprint 3",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface TodoProps {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: TodoProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  return (
    <TodoContext.Provider value={{ todoState }}>
      {children}
    </TodoContext.Provider>
  );
};
