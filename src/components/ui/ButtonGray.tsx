import type { IBaseUI } from "../../types/ui";

export const ButtonGray = ({ children, className = "", ...props }: IBaseUI) => {
  return (
    <button
      className={
        "text-3xl bg-input-gray p-4 rounded-2xl cursor-pointer " + className
      }
      {...props}
    >
      {children}
    </button>
  );
};
