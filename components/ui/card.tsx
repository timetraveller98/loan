import clsx from "clsx";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: Props) {
  return (
    <div className={clsx("bg-white p-4 rounded-lg", className)}>{children}</div>
  );
}

export function CardHeader({ children, className }: Props) {
  return <div className={clsx("mb-2", className)}>{children}</div>;
}

export function CardContent({ children, className }: Props) {
  return <div className={clsx("text-gray-700", className)}>{children}</div>;
}

export function CardTitle({ children, className }: Props) {
  return <h2 className={clsx("font-bold text-xl", className)}>{children}</h2>;
}
