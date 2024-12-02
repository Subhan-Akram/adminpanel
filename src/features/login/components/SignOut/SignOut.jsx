import { MenuItem } from "@mui/material";
import { logout } from "../../../../features/login/slice";
import { useDispatch } from "react-redux";

const useSignOut = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return { handleLogout };
};

export default useSignOut;
