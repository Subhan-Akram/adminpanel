import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { DrawerStyle, StyledList } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { sideBarOptions } from "constants";
import { useOutsideClick } from "hooks";
import { useRef } from "react";

const SideBar = ({ openSidebar, setOpenSidebar }) => {
  const sidebarRef = useRef();
  useOutsideClick(sidebarRef, "app_bar", () => {
    if (openSidebar) setOpenSidebar(false);
  });
  const navigate = useNavigate();
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
      {/* <ThemeToggleBox
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
      </ThemeToggleBox> */}
    </DrawerStyle>
  );
};
SideBar.propTypes = {
  openSidebar: PropTypes.bool,
  setOpenSidebar: PropTypes.func,
};
export default SideBar;
