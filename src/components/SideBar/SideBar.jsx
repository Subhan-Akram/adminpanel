import { Box } from "@mui/material";
import { Logo } from "sullyIcons";
import { DrawerStyle, StyledList } from "./style";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { sideBarOptions } from "constants";
import { useOutsideClick, useViewportWidth } from "hooks";
import React, { useRef } from "react";
import { LogoSign } from "assets";
import SidebarList from "components/SidebarList";

const SideBar = ({ openSidebar, setOpenSidebar }) => {
  const sidebarRef = useRef();

  const width = useViewportWidth();
  useOutsideClick(sidebarRef, "app_bar", () => {
    if (openSidebar && width < 1025) setOpenSidebar(false);
  });
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/");

  return (
    <DrawerStyle ref={sidebarRef} variant="permanent" open={openSidebar}>
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
          <Box onClick={handleNavigate} className="short_logo">
            <img
              alt="logo sign"
              style={{ objectFit: "contain" }}
              src={LogoSign}
            />
          </Box>
        )}
      </Box>
      <StyledList open={openSidebar}>
        {sideBarOptions.map((menuList) => (
          <React.Fragment key={menuList.path}>
            <SidebarList openSidebar={openSidebar} data={menuList} />
            {menuList?.children?.map((subMenuList) => (
              <SidebarList
                key={subMenuList.path}
                openSidebar={openSidebar}
                subMenu={"subMenu"}
                data={subMenuList}
              />
            ))}
          </React.Fragment>
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
