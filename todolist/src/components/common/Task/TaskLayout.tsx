import { ChangeEvent, useContext, useState } from "react";

import Button from "../Button/Button";
import Container from "../Container/Container";
import Input from "../Input/Input";
import TaskWrapper from "./TaskWrapper";
import { TaskStore } from "../../../context/TaskProvider";

const TaskLayout = () => {
  const { addTask } = useContext(TaskStore);

  const [value, setValue] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  };

  const handleAddTask = () => {
    if (!value) return;

    addTask({
      id: (Math.random() + 1).toString(36).substring(7),
      name: value,
      description: value,
      complete: false,
    });

    setValue("");
  };

  return (
    <Container>
      <Input
        value={value}
        onChange={handleOnChange}
        name="taskName"
        placeholder="Task Description"
      />

      <Button onClick={handleAddTask}>Add Task</Button>

      <TaskWrapper />
    </Container>
  );
};

export default TaskLayout;
