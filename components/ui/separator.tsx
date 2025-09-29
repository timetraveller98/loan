import clsx from "clsx";
export function Separator({ className }: { className?: string }) {
  return <hr className={clsx("border-t border-gray-300 my-4", className)} />;
}
