import { MenuItem } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import { clearPromptData } from "features/compare/slice";
import { resetCollection } from "features/home/slice";
import { resetState } from "features/integration/slice";
import { logout } from "features/login/slice";
import { useDispatch } from "react-redux";

const SignOut = () => {
  const { keycloak } = useKeycloak();
  const dispatch = useDispatch();

  const handleLogout = () => {
    keycloak.logout();
    dispatch(logout());
    dispatch(resetCollection());
    dispatch(resetState());
    dispatch(clearPromptData());
  };

  return <MenuItem onClick={handleLogout}>Logout</MenuItem>;
};

export default SignOut;
