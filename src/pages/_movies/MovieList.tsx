import { useEffect } from "react";
import { useMovie } from "../../context/MovieContext";
import MovieCard from "../../components/MovieCard";

const MovieList = () => {
  const { trending, getTrending, getSavedMovies } = useMovie();

  useEffect(() => {
    getTrending();
    getSavedMovies();
  }, []);

  return (
    <main className="grow overflow-y-hidden flex flex-col">
      <p className="text-black font-medium text-[15px]">
        Recently trending movies
      </p>
      {trending.length > 0 ? (
        <div className="overflow-scroll flex flex-wrap justify-center gap-5 pt-4.25 pb-5">
          {trending.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              name={movie.title}
              poster={movie.poster}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="">Loading content...</h1>
        </div>
      )}
    </main>
  );
};

export default MovieList;
