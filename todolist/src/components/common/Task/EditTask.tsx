import { ChangeEvent, useState } from "react";

import Button from "../Button/Button";
import Container from "../Container/Container";
import Input from "../Input/Input";

type CustomEditTaskProps = {
  editTask: (editedValue: string) => void;
};

const EditTask = ({ editTask }: CustomEditTaskProps) => {
  const [editedValue, setEditedValue] = useState("");

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setEditedValue(value);
  };

  return (
    <Container>
      <Input
        id="edit-value"
        name="edit-value"
        value={editedValue}
        onChange={onValueChange}
      />

      <Button onClick={() => editTask(editedValue)}>Save Task</Button>
    </Container>
  );
};

export default EditTask;
