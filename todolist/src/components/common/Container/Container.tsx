type CustomContainerProps = { className?: string };

const Container = ({
  children,
  className,
}: { children: React.ReactNode } & CustomContainerProps) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
