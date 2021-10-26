import { useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { AuthActions } from "../../redux/AuthActions.js";
const Login = () => {
  const dispatch = useDispatch();
  const singin = () => {
    dispatch({ type: AuthActions.LOGIN_SUCCESS, payload: null });
  };
  return (
    <div>
      <form action="">
        <input type="text" />
        <input type="text" />
        <button type="button" onClick={() => singin()}>
          {" "}
          ingresar{" "}
        </button>
      </form>
    </div>
  );
};

export default connect()(Login);
