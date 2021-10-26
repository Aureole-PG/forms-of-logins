import { createContext } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/authReducer";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
