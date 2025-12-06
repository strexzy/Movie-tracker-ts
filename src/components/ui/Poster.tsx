import type { IBaseUI } from "../../types/ui";

export const Poster = ({ className = "", ...props }: IBaseUI) => {
  return (
    <img
      className={"object-cover rounded-2xl overflow-hidden " + className}
      {...props}
    />
  );
};

export default Poster;
