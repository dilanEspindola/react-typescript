import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { Task } from "../interfaces/Task";

interface Props {
  addNewTask: (task: Task) => void;
}

const initiaState = {
  title: "",
  description: "",
};

export const TaskForm = ({ addNewTask }: Props) => {
  const [task, setTask] = useState(initiaState);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(task);
    setTask(initiaState);
    inputTitle.current?.focus();
  };

  return (
    <div className="border-2 bg-slate-300 p-5 rounded-md">
      <h1 className="text-center uppercase font-bold text-lg mb-3">
        form task
      </h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write a title"
          name="title"
          className="p-2 outline-none"
          onChange={handleChange}
          value={task.title}
          autoFocus
          ref={inputTitle}
        />
        <textarea
          name="description"
          placeholder="write a description"
          className="p-2 outline-none"
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg 
                text-white text-lg w-3/12"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};
