import { InputHTMLAttributes } from "react";
import Button from "../Button/Button";

type CustomCheckboxProps = {
  label?: string;
  removeTask: () => void;
};

const Checkbox = ({
  label,
  name,
  removeTask,
  ...props
}: CustomCheckboxProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className="checkbox-wrapper">
      {label && <span>{label}</span>}

      <input className="checkbox" {...props} type="checkbox" />
    </label>
  );
};

export default Checkbox;
