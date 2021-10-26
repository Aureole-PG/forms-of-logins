import { AuthActions } from "./AuthActions";
import { createStore } from "redux";
let initialState = {
  login: false,
};
const token = localStorage.getItem("token");
if (token) {
  initialState = { login: true };
}

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS:
      localStorage.setItem("token", "true");
      console.log("login");
      return {
        login: true,
      };
    case AuthActions.LOG_OUT:
      localStorage.removeItem("token");
      console.log("LOG_OUT");
      return initialState;
    default:
      return state;
  }
};

export const store = createStore(AuthReducer);
