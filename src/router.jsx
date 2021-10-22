import { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home/Home";
import { AuthContext } from "./context/auth/authContext";
const AppRouter = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => {
            return user.login ? <Redirect to={"/user"} /> : <Login />;
          }}
        />
        <PrivateRoutes logged={user.login} path="/user">
          <Home />
        </PrivateRoutes>
        <Route path="/**">
          <div>404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const PrivateRoutes = ({ children, logged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (logged ? children : <Redirect to={"/"} />)}
    />
  );
};

export default AppRouter;
