import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";
const AppRouter = () => {
  const userLogged = useSelector((state) => state.login);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => {
            return userLogged ? <Redirect to={"/user"} /> : <Login />;
          }}
        />
        <PrivateRoutes logged={userLogged} path="/user">
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
