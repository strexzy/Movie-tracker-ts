import type { TSearchMovies, TPoster, ID, TTitle, TGenre } from "./context";

// Base
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
export interface IMovieCardSearchProps extends IMovieCardPropsBase {
  visibilityChanger: (isVisible: TIsVisible) => void;
}

// MovieCard
export interface IMovieCardProps extends IMovieCardPropsBase {
  className?: string;
}

// GenreList
export interface IGenreListProps {
  genres: TGenre[];
}

// SaveButton
export type TIsSaved = boolean;

export interface ISaveButtonProps {
  flag: string;
  text: string;
}

//SavedList

export interface ISavedListProps {
  title: string;
  className?: string;
}
