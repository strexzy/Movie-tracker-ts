import type { IPosterUI } from "../../types/ui";

export const Poster = ({ className = "", ref, ...props }: IPosterUI) => {
  return (
    <img
      ref={ref}
      className={"object-cover rounded-2xl overflow-hidden " + className}
      {...props}
    />
  );
};

export default Poster;
