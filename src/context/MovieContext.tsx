import axios, { isAxiosError } from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";
import type {
  TTrendingMovies,
  IMovieContextType,
  TSearchMovies,
  IMovieDetails,
  TSavedMovies,
  TErrorMovieMessage,
  TQueryParameter,
  ID,
  IMovie,
} from "../types/context.ts";

const MovieContext = createContext<IMovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [trending, setTrending] = useState<TTrendingMovies>([]);
  const [search, setSearch] = useState<TSearchMovies>([]);
  const [movie, setMovie] = useState<IMovieDetails | null>(null);
  const [savedMovies, setSavedMovies] = useState<TSavedMovies>([]);
  const [errorMovieMessage, setErrorMovieMessage] =
    useState<TErrorMovieMessage>(null);

  const { isAuth } = useAuth();

  const safeAxiosErrorMessage = (error: unknown): void => {
    if (isAxiosError(error) && typeof error.response?.data.message === "string")
      setErrorMovieMessage(error.response.data.message);
  };

  const getTrending = async (): Promise<void> => {
    const url = "http://localhost:4000/api/movies/trending";
    try {
      const response = await axios.get<{ results: TTrendingMovies }>(url);
      setTrending(response.data.results);
    } catch (error) {
      safeAxiosErrorMessage(error);
    }
  };

  const getSearch = async (queryParameter: TQueryParameter): Promise<void> => {
    const url =
      "http://localhost:4000/api/movies/search?query=" + queryParameter;
    try {
      const response = await axios.get<{ results: TSearchMovies }>(url);
      setSearch(response.data.results);
    } catch (error) {
      safeAxiosErrorMessage(error);
    }
  };

  const getMovie = async (movieId: ID): Promise<void> => {
    const url = "http://localhost:4000/api/movies/details/" + movieId;
    try {
      const response = await axios.get<IMovieDetails>(url);
      setMovie(response.data);
    } catch (error) {
      safeAxiosErrorMessage(error);
    }
  };

  const saveMovie = async ({
    id,
    title,
    year,
    poster,
  }: IMovie): Promise<void> => {
    const url = "http://localhost:4000/api/movies/save";
    try {
      await axios.post<void>(
        url,
        { movie_id: id, title, year, poster },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        },
      );
    } catch (error) {
      safeAxiosErrorMessage(error);
    }
  };

  const getSavedMovies = async (): Promise<void> => {
    const url = "http://localhost:4000/api/mymovies";
    try {
      const response = await axios.get<{ movies: TSavedMovies }>(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      setSavedMovies(response.data.movies);
    } catch (error) {
      safeAxiosErrorMessage(error);
    }
  };

  const deleteSavedMovie = async (movieId: ID): Promise<void> => {
    const url = "http://localhost:4000/api/movies/" + movieId;
    try {
      await axios.delete<void>(url, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      safeAxiosErrorMessage(error);
    }
  };

  useEffect(() => {
    getSavedMovies();
  }, [isAuth]);

  return (
    <MovieContext.Provider
      value={{
        trending,
        search,
        movie,
        savedMovies,
        errorMovieMessage,
        getTrending,
        getSearch,
        getMovie,
        getSavedMovies,
        saveMovie,
        deleteSavedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = (): IMovieContextType => {
  const ctx = useContext(MovieContext);
  if (!ctx) {
    throw new Error("useMovie must be used within a MovieProvider");
  }
  return ctx;
};

export default MovieContext;
