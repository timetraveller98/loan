import clsx from "clsx";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: Props) {
  return (
    <span
      className={clsx(
        "px-3 py-1 rounded-full text-sm font-medium mt-6 bg-gray-200 text-gray-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
