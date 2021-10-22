import AppRouter from "./router";
import AuthProvider from "./context/auth/authContext";
const App = () => {
  console.log("app");
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
