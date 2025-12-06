import type { TSearchMovies, TPoster, ID, TTitle } from "./context";

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

export interface IMovieCardSearchProps {
  poster: TPoster;
  name: TTitle;
  movieId: ID;
}
