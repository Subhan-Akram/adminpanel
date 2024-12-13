import { Login } from "features/login";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const location = useLocation();
  const { access_token } = useSelector((state) => state.auth);

  if (access_token) return <Navigate to="/" state={{ from: location }} />;

  return <Login />;
};

export default LoginPage;
