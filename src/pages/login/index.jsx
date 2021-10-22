import { useContext } from "react";
import { AuthContext } from "../../context/auth/authContext";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const { login } = useContext(AuthContext);
  const singin = () => {
    console.log(history);
  };
  return (
    <div>
      <form action="">
        <input type="text" />
        <input type="text" />
        <button type="button" onClick={() => login()}>
          {" "}
          ingresar{" "}
        </button>
      </form>
    </div>
  );
};

export default Login;
