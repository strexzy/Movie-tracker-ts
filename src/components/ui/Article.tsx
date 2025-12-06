import type { IBaseUI } from "../../types/ui";

export const Article = ({ children, className = "", ...props }: IBaseUI) => {
  return (
    <article
      className={"max-h-26 overflow-scroll text-justify " + className}
      {...props}
    >
      {children}
    </article>
  );
};
