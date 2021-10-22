import { useContext } from "react";
import { AuthContext } from "../../context/auth/authContext";
const Home = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <div>
      <button onClick={logOut}>salir</button>
      home
    </div>
  );
};

export default Home;
