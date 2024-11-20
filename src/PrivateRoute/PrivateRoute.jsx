import Layout from "layouts";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.access_token) return navigate("/login");
  }, [navigate, user?.access_token]);

  useEffect(() => {
    if (!user?.access_token) return navigate("/login");
  }, [navigate, user?.access_token]);
  if (user?.access_token) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }
};

export default PrivateRoute;
