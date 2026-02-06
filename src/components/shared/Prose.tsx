interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className = "" }: ProseProps) {
  return (
    <div className={`prose mx-auto ${className}`}>
      {children}
    </div>
  );
}
