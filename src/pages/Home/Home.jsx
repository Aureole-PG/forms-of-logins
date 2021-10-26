import { useDispatch, connect } from "react-redux";
import { AuthActions } from "../../redux/AuthActions.js";
const Home = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch({ type: AuthActions.LOG_OUT, payload: null });
  };
  return (
    <div>
      <button onClick={() => logOut()}>salir</button>
      home
    </div>
  );
};

export default connect()(Home);
