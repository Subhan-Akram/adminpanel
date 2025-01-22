import Layout from "layouts";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  const { access_token } = useSelector((state) => state.auth);

  if (!access_token) return <Navigate to="/login" state={{ from: location }} />;

  if (access_token) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }
};

export default PrivateRoute;
