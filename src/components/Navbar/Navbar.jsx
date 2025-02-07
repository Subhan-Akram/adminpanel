import { Box, IconButton, Avatar } from "@mui/material";
import { ProfileIcon } from "assets";
import { Logout } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ToolBar, AppBar } from "./style";
import PropTypes from "prop-types";
import { MoonIcon, SunIcon } from "sullyIcons";
import { Logo } from "sullyIcons";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { ThemeToggleBox, ThemeToggleContainer } from "./style";
import { LogoText } from "assets";
import { useSignOut } from "features/login";
import { SullyTypography, DropDown } from "components";
import { useUserInfo } from "hooks";

const Navbar = ({ openSidebar, setOpenSidebar }) => {
  const { mode } = useSelector((state) => state.theme);
  const name = useUserInfo();
  const navigate = useNavigate();
  const { handleLogout } = useSignOut();

  const handleToggle = () => setOpenSidebar((prevOpen) => !prevOpen);

  const handleNavigate = () => navigate("/");

  return (
    <AppBar id="app_bar" position="fixed" open={openSidebar}>
      <ToolBar open={openSidebar}>
        <Box className="logoRoot">
          <Box className="logo_text" onClick={handleNavigate}>
            {!openSidebar && <img alt="logo" src={LogoText} />}
          </Box>
          <IconButton className="tablet_toggle_btn" onClick={handleToggle}>
            <MenuIcon />
          </IconButton>
          <Box className="logo" onClick={handleNavigate}>
            <Logo />
          </Box>
        </Box>
        <Box className="profileRoot">
          <Box className="icon_text coint_point">
            <ThemeToggleBox onClick={() => {}}>
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
                  <Avatar clas size="small" className="user_avatar">
                    {
                      <SullyTypography
                        variant={"span"}
                        classNameProps="text-capitalize"
                      >
                        {name?.toLowerCase()[0]}
                      </SullyTypography>
                    }
                  </Avatar>
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
