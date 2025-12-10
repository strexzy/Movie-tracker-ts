import type { TSearchMovies, TPoster, ID, TTitle, TGenre } from "./context";

export interface IMovieCardPropsBase {
  poster: TPoster;
  name: TTitle;
  movieId: ID;
}

// SearchBar

export type TIsVisible = boolean;

export type IFormTypes = {
  searchField: string;
};

// MovieSearchList

export interface IMovieSearchListProps {
  search: TSearchMovies;
  visibilityChanger: (isVisible: TIsVisible) => void;
}

// MovieCardSearch

export interface IMovieCardSearchProps extends IMovieCardPropsBase {}

// MovieCard

export interface IMovieCardProps extends IMovieCardPropsBase {
  className?: string;
}

// GenreList

export interface IGenreListProps {
  genres: TGenre[];
}
