import type { IAuthButtonUI } from "../../types/ui";

export const AuthButton = ({
  children,
  className = "",
  ...props
}: IAuthButtonUI) => {
  return (
    <button
      className={
        "w-98.25 bg-button-blue rounded-[20px] py-2 text-[25px] font-normal text-white cursor-pointe " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
};
