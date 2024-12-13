import { MenuItem } from "@mui/material";
import { logout } from "../../../../features/login/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useSignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return { handleLogout };
};

export default useSignOut;
