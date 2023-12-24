import { ChangeEvent, useContext, useState } from "react";

import Button from "../Button/Button";
import Container from "../Container/Container";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";

import { TaskStore } from "../../../context/TaskProvider";

const TaskLayout = () => {
  const { tasks, addTask, removeTask } = useContext(TaskStore);

  const [value, setValue] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  };

  return (
    <Container>
      <Input
        value={value}
        onChange={handleOnChange}
        name="taskName"
        type="text"
      />

      <Button
        onClick={() => {
          addTask({
            id: (Math.random() + 1).toString(36).substring(7),
            name: value,
            description: value,
            complete: false,
          });
        }}
      >
        Add Task
      </Button>

      {tasks.map((task) => (
        <Checkbox
          onClick={() => {
            removeTask(task);
          }}
          id={task.id}
          key={task.id}
          label={task.description}
          checked={task.complete}
          disabled={task.complete}
        />
      ))}
    </Container>
  );
};

export default TaskLayout;
