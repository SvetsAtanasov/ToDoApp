import { createContext, useState } from "react";

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

const TaskProvider = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((tasks: Task[]) => [...tasks, task]);
  };

  const removeTask = (task: Task) => {
    setTasks((tasks: Task[]) => tasks.filter((t: Task) => t.id !== task.id));
  };

  return <Provider value={{ tasks, addTask, removeTask }} />;
};

export default TaskProvider;
