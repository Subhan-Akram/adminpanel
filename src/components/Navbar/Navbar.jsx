import { Box } from "@mui/material";
import { ProfileIcon } from "assets";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ToolBar, AppBar } from "./style";
import SullyTypography from "../SullyTypography";
import PropTypes from "prop-types";
import { MoonIcon, SunIcon } from "sullyIcons";
import { Logo } from "sullyIcons";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import { useEffect, useRef, useState } from "react";
import { SignOut } from "features/login";
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
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <AppBar id="app_bar" position="fixed" open={openSidebar}>
      <ToolBar open={openSidebar}>
        <Box className="logoRoot">
          <Box className="menu_icon" onClick={handleNavigate}>
            {!openSidebar && <img src={LogoText} />}
          </Box>
        </Box>
        <Box className="profileRoot">
          <Box className="icon_text coint_point">
            <ThemeToggleBox
              onClick={() => {
                dispatch(setThemeMode(mode === "dark" ? "light" : "dark"));
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

          <Box className="icon_text drop_down_Box" onClick={handleToggle}>
            <Box>
              {/* <SullyTypography classNameProps="caption">
                <SullyTypography
                  variant={"span"}
                  classNameProps="text-capitalize"
                >
                  {name?.toLowerCase()}
                </SullyTypography>
              </SullyTypography> */}
            </Box>
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
