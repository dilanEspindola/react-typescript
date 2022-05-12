import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

export const TaskCard = ({ task, deleteTask }: Props) => {
  return (
    <div className="bg-slate-700 flex flex-col justify-center items-center rounded-sm p-2">
      <h2 className="text-white">{task.title}</h2>
      <p className="text-slate-300">{task.description}</p>
      <button
        className="bg-red-600 w-6/12 mt-5 text-white p-2 hover:bg-red-700"
        onClick={() => task.id && deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};
