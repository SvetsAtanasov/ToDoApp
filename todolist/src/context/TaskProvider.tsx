import { ReactNode, createContext, useState } from "react";

import { Task } from "../types/types";

type TaskProviderType = {
  addTask: (task: Task) => void;
  removeTask: (task: Task) => void;
  tasks: Task[];
};

export const TaskStore = createContext<TaskProviderType>({
  addTask: (task: Task) => {},
  removeTask: (task: Task) => {},
  tasks: [],
});

const { Provider } = TaskStore;

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((tasks: Task[]) => [...tasks, task]);
  };

  const removeTask = (task: Task) => {
    setTasks((tasks: Task[]) =>
      tasks.map((t) => (t.id === task.id ? { ...t, complete: true } : { ...t }))
    );
  };

  return (
    <Provider value={{ tasks, addTask, removeTask }} children={children} />
  );
};

export default TaskProvider;
