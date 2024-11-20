import { MenuItem } from "@mui/material";
import { logout } from "../../../../features/login/slice";
import { useDispatch } from "react-redux";

const SignOut = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <MenuItem onClick={handleLogout}>Logout</MenuItem>;
};

export default SignOut;
