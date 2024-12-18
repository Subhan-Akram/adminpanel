import { Box, IconButton } from "@mui/material";
import { ProfileIcon } from "assets";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ToolBar, AppBar } from "./style";
import SullyTypography from "../SullyTypography";
import PropTypes from "prop-types";
import { MoonIcon, SunIcon } from "sullyIcons";
import { Logo } from "sullyIcons";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { ThemeToggleBox, ThemeToggleContainer } from "../SideBar/style";
import { setThemeMode } from "../../themeReducer/ThemeReducer";
import { LogoText } from "../../assets";
import DropDown from "../Dropdown";
import useSignOut from "../../features/login/components/SignOut";
import { Logout } from "@mui/icons-material";

const Navbar = ({ openSidebar, setOpenSidebar }) => {
  const { mode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleLogout } = useSignOut();
  const {
    user: { name },
  } = useSelector((state) => state.auth);

  const handleToggle = () => {
    setOpenSidebar((prevOpen) => !prevOpen);
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <AppBar id="app_bar" position="fixed" open={openSidebar}>
      <ToolBar open={openSidebar}>
        <Box className="logoRoot">
          <Box className="logo_text" onClick={handleNavigate}>
            {!openSidebar && <img src={LogoText} />}
          </Box>
          <IconButton className="tablet_toggle_btn" onClick={handleToggle}>
            {" "}
            <MenuIcon />
          </IconButton>
          <Box className="logo" onClick={handleNavigate}>
            <Logo />
          </Box>
        </Box>
        <Box className="profileRoot">
          <Box className="icon_text coint_point">
            <ThemeToggleBox
              onClick={() => {
                // dispatch(setThemeMode(mode === "dark" ? "light" : "dark"));
              }}
            >
              <ThemeToggleContainer mode={mode}>
                <Box className="iconContainer-sun">
                  <SunIcon />
                </Box>
                <Box className="iconContainer-moon">
                  <MoonIcon />
                </Box>
              </ThemeToggleContainer>
            </ThemeToggleBox>
          </Box>

          <Box className="icon_text drop_down_Box">
            <DropDown
              className={"show_only_icon "}
              icon={null}
              menuItems={[
                {
                  label: "Logout",
                  icon: <Logout />,
                  onClick: handleLogout,
                },
              ]}
            >
              <Box className="icon_text drop_down_Box">
                <Box className="profile_icon">
                  <img alt="profile icon" src={ProfileIcon}></img>
                </Box>
                <SullyTypography
                  variant={"span"}
                  classNameProps="text-capitalize"
                >
                  {name?.toLowerCase() || "twg"}
                </SullyTypography>
                <KeyboardArrowDownIcon />
              </Box>
            </DropDown>
          </Box>
        </Box>
      </ToolBar>
    </AppBar>
  );
};
Navbar.propTypes = {
  openSidebar: PropTypes.bool,
  setOpenSidebar: PropTypes.func,
};
export default Navbar;
