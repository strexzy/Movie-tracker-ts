import axios, { isAxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import type {
  IUser,
  IAuthContextType,
  TIsAuth,
  TErrorAuthMessage,
  TUsername,
  TPassword,
  IAuthorizationResponse,
  TEmail,
  TJWTToken,
  TTokenExpiredStatus,
} from "../types/context.ts";

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState<TIsAuth>(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [errorAuthMessage, setErrorAuthMessage] =
    useState<TErrorAuthMessage>("");

  const safeAxiosErrorMessage = (error: unknown): void => {
    if (isAxiosError(error) && typeof error.response?.data.message === "string")
      setErrorAuthMessage(error.response?.data.message);
  };

  const authorizeUser = async (
    username: TUsername,
    password: TPassword,
  ): Promise<void> => {
    const url = "http://localhost:4000/api/login";
    try {
      const response = await axios.post<IAuthorizationResponse>(url, {
        username,
        password,
      });
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
      setIsAuth(true);
    } catch (error) {
      safeAxiosErrorMessage(error);
    }
  };

  const registerUser = async (
    username: TUsername,
    email: TEmail,
    password: TPassword,
    confirmPassword: TPassword,
  ): Promise<void> => {
    const url = "http://localhost:4000/api/register";
    try {
      const response = await axios.post<IAuthorizationResponse>(url, {
        username,
        email,
        password,
        confirmPassword,
      });
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
      setIsAuth(true);
    } catch (error) {
      safeAxiosErrorMessage(error);
    }
  };

  const logoutUser = (): void => {
    setIsAuth(false);
    setUser(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };

  const isTokenExpired = (token: TJWTToken | null): TTokenExpiredStatus => {
    if (!token) return true;

    try {
      const { exp } = jwtDecode<{ exp?: number }>(token);
      if (!exp) return true;

      const now = Date.now() / 1000;
      return exp < now;
    } catch (e) {
      return true;
    }
  };

  useEffect(() => {
    const tokenStatus = isTokenExpired(sessionStorage.getItem("token"));
    const userData = sessionStorage.getItem("user");
    if (!tokenStatus && sessionStorage.getItem("user") && userData) {
      setIsAuth(true);
      setUser(JSON.parse(userData));
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        errorAuthMessage,
        user,
        authorizeUser,
        registerUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export default AuthContext;
