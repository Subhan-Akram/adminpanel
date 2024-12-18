import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Logo } from "sullyIcons";
import { DrawerStyle, StyledList } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { sideBarOptions } from "constants";
import { useOutsideClick } from "hooks";
import { useRef } from "react";
import { LogoSign } from "../../assets";
import useViewportWidth from "../../hooks/useViewportWidth";

const SideBar = ({ openSidebar, setOpenSidebar }) => {
  const sidebarRef = useRef();
  const width = useViewportWidth();
  useOutsideClick(sidebarRef, "app_bar", () => {
    if (openSidebar && width < 1025) setOpenSidebar(false);
  });
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const { pathname } = useLocation();
  const getPath = () => {
    if (pathname.includes("home")) {
      return "";
    } else {
      return pathname.split("/")[1].replace("/", "");
    }
  };
  return (
    <DrawerStyle ref={sidebarRef} variant="permanent" open={openSidebar}>
      {/* <Box className="toggle_icon">
        <KeyboardArrowRightRoundedIcon />
      </Box> */}
      <Box className="sidebar_header">
        {openSidebar ? (
          <Box
            onClick={handleNavigate}
            className="logo"
            sx={{ width: "200px" }}
          >
            <Logo />
          </Box>
        ) : (
          <Box
            onClick={handleNavigate}
            className="short_logo"
            sx={{ width: "120px", height: "40px", cursor: "pointer" }}
          >
            <img
              alt="logo sign"
              style={{ objectFit: "contain" }}
              src={LogoSign}
            />
          </Box>
        )}
      </Box>
      <StyledList open={openSidebar}>
        {sideBarOptions.map(({ title, Icon, path, activeTabValue }) => (
          <ListItem
            className={activeTabValue === getPath() ? "listItemActive" : ""}
            key={title}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(`/${path}`);
              }}
            >
              <ListItemIcon>{<Icon />}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </StyledList>
    </DrawerStyle>
  );
};
SideBar.propTypes = {
  openSidebar: PropTypes.bool,
  setOpenSidebar: PropTypes.func,
};
export default SideBar;
