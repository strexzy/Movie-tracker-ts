import type { IBaseUI } from "../../types/ui";

export const ErrorMsg = ({ children, className = "", ...props }: IBaseUI) => {
  return (
    <p
      className={
        "text-[15px] text-transparent-gray max-w-100 text-center " + className
      }
      {...props}
    >
      {children}
    </p>
  );
};
