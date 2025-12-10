import { Title } from "../../components/ui/Title";
import { ButtonGray } from "../../components/ui/ButtonGray";
import UserAvatar from "../../assets/user.png";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { user, logoutUser } = useAuth();

  return (
    <main className="grow flex flex-col justify-around items-center gap-12">
      <Title>Welcome back, {user ? user.username : "Undefined"}!</Title>
      <img src={UserAvatar} alt="User avatar image" className=" size-65" />
      <ButtonGray className="font-bold" onClick={() => logoutUser()}>
        Logout
      </ButtonGray>
    </main>
  );
};

export default Home;
