import { useMovie } from "../context/MovieContext";
import { useNavigate } from "react-router";
import { Poster } from "./ui/Poster";
import type { IMovieCardProps } from "../types/components";
import type { ID } from "../types/context";

const MovieCard = ({ poster, name, movieId, className }: IMovieCardProps) => {
  const { getMovie } = useMovie();
  const navigate = useNavigate();

  const handleClick = async (id: ID) => {
    await getMovie(id);
    navigate("/movies/movie/" + id);
  };

  return (
    <div
      onClick={() => {
        handleClick(movieId);
      }}
      className={
        className
          ? className + " relative rounded-2xl overflow-hidden cursor-pointer"
          : "relative w-49 h-71.75 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:-translate-y-2 transition duration-200 ease-in"
      }
    >
      <Poster className="w-full h-full" src={poster} alt={name + " Poster"} />
      <div className="absolute top-3 left-3.5 right-0 text-white">
        <p className="">⭐ 8.7</p> {/* No rating on api*/}
      </div>
    </div>
  );
};

export default MovieCard;
