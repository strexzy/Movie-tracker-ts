import { useRef } from "react";
import { useMovie } from "../context/MovieContext";
import { useNavigate } from "react-router";
import { Poster } from "./ui/Poster";
import BlankPoster from "../assets/posterBlank.png";
import type { IMovieCardSearchProps } from "../types/components";
import type { ID } from "../types/context";

const MovieCardSearch = ({ poster, name, movieId }: IMovieCardSearchProps) => {
  const { getMovie } = useMovie();
  const navigate = useNavigate();
  const posterRef = useRef<HTMLImageElement>(null);

  const handleClick = async (id: ID): Promise<void> => {
    await getMovie(id);
    navigate("/movies/movie/" + id);
  };

  return (
    <div
      onClick={() => {
        handleClick(movieId);
      }}
      className="shrink-0 flex justify-between items-center w-full h-full rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="w-1/2 flex justify-center">
        <Poster
          ref={posterRef}
          className="w-30 h-18"
          src={poster || BlankPoster}
          alt={name + " Poster"}
        />
      </div>
      <div className="w-1/2 flex justify-center">
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};

export default MovieCardSearch;
