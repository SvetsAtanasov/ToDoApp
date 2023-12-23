import { InputHTMLAttributes } from "react";

type CustomCheckboxProps = {
  label?: string;
};

const Checkbox = ({
  label,
  name,
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
