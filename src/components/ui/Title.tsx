import type { IBaseUI } from "../../types/ui";

export const Title = ({ children, className = "", ...props }: IBaseUI) => {
  return (
    <h1 className={"text-center text-[40px] font-bold " + className} {...props}>
      {children}
    </h1>
  );
};
