import { Task } from "../interfaces/Task";
import { TaskCard } from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

export const TaskList = ({ tasks, deleteTask }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} deleteTask={deleteTask} />
      ))}
    </div>
  );
};
