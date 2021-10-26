import AppRouter from "./router";
import AuthProvider from "./context/auth/authContext";
const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
