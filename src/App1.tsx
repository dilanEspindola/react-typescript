import { useState, Dispatch, SetStateAction } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Task } from "./interfaces/Task";

interface PropsTypes {
  hola?: string;
}

function App({ hola }: PropsTypes) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "learn react",
      description: "learn react",
      completed: false,
    },
  ]);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addNewTask = (task: Task) =>
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimestamp(), completed: false },
    ]);

  const deleteTask = (idTask: number) => {
    setTasks(tasks.filter((task) => task.id !== idTask));
  };

  return (
    <div className="w-full h-screen bg-slate-900 p-5">
      <div className="w-8/12 mx-auto bg-slate-800 p-5 shadow-md">
        <p className="text-center uppercase text-lg text-white">{hola}</p>
        <div className="mt-5">
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
      <div className="w-6/12 mx-auto mt-10">
        <TaskForm addNewTask={addNewTask} />
      </div>
    </div>
  );
}

export default App;
