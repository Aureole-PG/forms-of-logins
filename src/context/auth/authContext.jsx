import { createContext, useMemo, useState, useEffect } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ login: false });

  const token = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ login: true });
    }
    console.log(token);
  };

  const login = () => {
    setUser({ login: true });
    localStorage.setItem("token", "true");
  };
  const logOut = () => {
    setUser({ login: false });
    localStorage.removeItem("token");
  };
  useEffect(() => {
    token();
  }, []);

  const UserValues = useMemo(
    () => ({
      user,
      login,
      logOut,
    }),
    [user]
  );
  return (
    <AuthContext.Provider value={UserValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
