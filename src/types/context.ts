// AuthContext types

export type ID = string;
export type TUsername = string;
export type TPassword = string;
export type TEmail = string;
export type TDisplayName = string | null;
export type TCreatedAt = string;
export type TErrorAuthMessage = string;
export type TJWTToken = string;
export type TTokenExpiredStatus = boolean;

export interface IAuthContextType {
  isAuth: TIsAuth;
  errorAuthMessage: TErrorAuthMessage;
  user: IUser | null;
  authorizeUser: (username: TUsername, password: TPassword) => Promise<void>;
  registerUser: (
    username: TUsername,
    email: TEmail,
    password: TPassword,
    confirmPassword: TPassword,
  ) => Promise<void>;
  logoutUser: () => void;
}

export interface IAuthorizationResponse {
  user: IUser;
  token: string;
}

export type TIsAuth = boolean;

export interface IUser {
  id: ID;
  username: TUsername;
  email: TEmail;
  displayName: TDisplayName;
  created_at: TCreatedAt;
}

// MovieContext types

export type TTitle = string;
export type TOverview = string;
export type TYear = string;
export type TPoster = string | undefined;
export type TTrendingMovies = IMovie[];
export type TSearchMovies = IMovie[];
export type TSavedMovies = ISavedMovie[];
export type TErrorMovieMessage = string | null;
export type TGenre = string;
export type TQueryParameter = string;

export interface IMovie {
  id: ID;
  title: TTitle;
  overview: TOverview;
  year: TYear;
  poster: TPoster;
}

export interface ISavedMovie {
  movie_id: ID;
  title: TTitle;
  overview: TOverview;
  year: TYear;
  poster: TPoster;
}

export interface IMovieDetails extends IMovie {
  genres: TGenre[];
}

export interface IMovieContextType {
  trending: TTrendingMovies;
  search: TSearchMovies;
  movie: IMovieDetails | null;
  savedMovies: TSavedMovies;
  errorMovieMessage: TErrorMovieMessage;
  getTrending: () => Promise<void>;
  getSearch: (queryParameter: TQueryParameter) => Promise<void>;
  getMovie: (movieId: ID) => Promise<void>;
  saveMovie: (movie: IMovie) => Promise<void>;
  getSavedMovies: () => Promise<void>;
  deleteSavedMovie: (movieId: ID) => Promise<void>;
}
