import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";
import Header from "../../components/Header";

const RootLayout = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/auth");
    }
  }, [isAuth]);

  return (
    <section className="h-full w-full max-w-7xl mx-auto flex flex-col">
      <Header />
      <Outlet />
    </section>
  );
};

export default RootLayout;
