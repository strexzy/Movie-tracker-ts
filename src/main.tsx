import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/AuthContext.tsx";
import { MovieProvider } from "./context/MovieContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./pages/_root/RootLayout";
import ErrorFh from "./pages/_error/ErrorFh";
import Home from "./pages/_root/Home";
import AuthLayout from "./pages/_auth/AuthLayout";
import SignIn from "./pages/_auth/SignIn";
import SignUp from "./pages/_auth/SignUp";
import MoviesLayout from "./pages/_movies/MoviesLayout";
import MovieList from "./pages/_movies/MovieList";
import Movie from "./pages/_movies/Movie";
import Watching from "./pages/_movies/Watching.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    Component: ErrorFh,
  },
  {
    path: "/",
    Component: RootLayout,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      { index: true, Component: SignIn },
      { path: "register", Component: SignUp },
    ],
  },
  {
    path: "movies",
    Component: MoviesLayout,
    children: [
      { index: true, path: "trending", Component: MovieList },
      { path: "movie/:movieId", Component: Movie },
      { path: "watching", Component: Watching },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <MovieProvider>
        <RouterProvider router={router} />
      </MovieProvider>
    </AuthProvider>
  </StrictMode>,
);
