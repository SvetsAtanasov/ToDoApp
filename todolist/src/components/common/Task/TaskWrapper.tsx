import { useContext } from "react";

import Task from "./Task";
import Container from "../Container/Container";
import { TaskStore } from "../../../context/TaskProvider";

const TaskWrapper = () => {
  const { tasks } = useContext(TaskStore);

  return (
    <Container className="task-wrapper">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Container>
  );
};

export default TaskWrapper;
