import { ReactNode, createContext, useState } from "react";

import { Task } from "../types/types";

type TaskProviderType = {
  addTask: (task: Task) => void;
  completeTask: (task: Task) => void;
  removeTask: (task: Task) => void;
  editTask: (task: Task, editedValue: string) => void;
  tasks: Task[];
};

export const TaskStore = createContext<TaskProviderType>({
  addTask: (task: Task) => {},
  completeTask: (task: Task) => {},
  removeTask: (task: Task) => {},
  editTask: (task: Task, editedValue: string) => {},
  tasks: [],
});

const { Provider } = TaskStore;

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((tasks: Task[]) => [...tasks, task]);
  };

  const completeTask = (task: Task) => {
    setTasks((tasks: Task[]) =>
      tasks.map((t) => (t.id === task.id ? { ...t, complete: true } : { ...t }))
    );
  };

  const removeTask = (task: Task) => {
    setTasks((tasks: Task[]) => tasks.filter((t) => t.id !== task.id));
  };

  const editTask = (task: Task, editedValue: string) => {
    setTasks((tasks: Task[]) =>
      tasks.map((t) =>
        t.id === task.id
          ? { ...t, description: editedValue, name: editedValue }
          : { ...t }
      )
    );
  };

  return (
    <Provider
      value={{ tasks, addTask, completeTask, removeTask, editTask }}
      children={children}
    />
  );
};

export default TaskProvider;
