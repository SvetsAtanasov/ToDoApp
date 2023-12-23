import { InputHTMLAttributes } from "react";

type CustomCheckboxProps = {
  label?: string;
};

const Checkbox = ({
  label,
  name,
  checked,
  ...props
}: CustomCheckboxProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className="checkbox-wrapper">
      <input className="checkbox" {...props} type="checkbox" />

      {label && (
        <span className={`checkbox-label ${checked ? "strike" : ""}`}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
