import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Logo } from "sullyIcons";
import { DrawerStyle, StyledList } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { sideBarOptions } from "constants";
import { useOutsideClick } from "hooks";
import { useRef } from "react";

const SideBar = ({ openSidebar, setOpenSidebar }) => {
  const sidebarRef = useRef();
  useOutsideClick(sidebarRef, "app_bar", () => {
    // if (openSidebar) setOpenSidebar(false);
  });
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log("open sidebar", openSidebar);
  const getPath = () => {
    if (pathname.includes("home")) {
      return "";
    } else {
      return pathname.split("/")[1].replace("/", "");
    }
  };
  return (
    <DrawerStyle ref={sidebarRef} variant="permanent" open={openSidebar}>
      <Box className="sidebar_header">
        <Box className="logo" sx={{ width: "200px" }}>
          {" "}
          <Logo />
        </Box>
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
