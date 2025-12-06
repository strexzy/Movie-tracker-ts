import type { IBaseUI } from "../../types/ui";

export const Genre = ({ children, className = "", ...props }: IBaseUI) => {
  return (
    <p
      className={
        "border-2 border-black px-4.25 py-1.5 rounded-[20px] text-center font-medium text-lg " +
        className
      }
      {...props}
    >
      {children}
    </p>
  );
};
