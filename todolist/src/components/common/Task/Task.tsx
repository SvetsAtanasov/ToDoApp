import { useContext, useState } from "react";

import Checkbox from "../Checkbox/Checkbox";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { Task as TaskType } from "../../../types/types";
import { TaskStore } from "../../../context/TaskProvider";
import EditTask from "./EditTask";

type CustomTaskProps = {
  task: TaskType;
};

const Task = ({ task }: CustomTaskProps) => {
  const { completeTask, removeTask, editTask } = useContext(TaskStore);

  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  return (
    <Container className="task">
      <Checkbox
        onChange={() => {
          completeTask(task);
        }}
        removeTask={() => {
          removeTask(task);
        }}
        id={task.id}
        label={task.description}
        checked={task.complete}
        disabled={task.complete}
      />

      <Button onClick={() => removeTask(task)}>Remove Task</Button>
      {editing ? (
        <EditTask
          editTask={(editedValue: string) => {
            editTask(task, editedValue);
            setEditing(false);
          }}
        />
      ) : (
        <Button onClick={handleEditClick}>Edit Task</Button>
      )}
    </Container>
  );
};

export default Task;
