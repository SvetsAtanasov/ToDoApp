import { ButtonHTMLAttributes, ReactNode } from "react";

const Button = ({
  children,
  ...props
}: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
