import { useState } from "react";

import { Checkbox, Container } from "../../common";

const LibraryPage = () => {
  const [checked, setChecked] = useState(false);

  const onCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <Container>
      <Checkbox checked={checked} onChange={onCheckboxChange} label="Task" />
    </Container>
  );
};

export default LibraryPage;
