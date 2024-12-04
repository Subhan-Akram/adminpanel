import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Navbar, SideBar } from "../components";
import { MainContent } from "./style";
import { useViewportWidth } from "hooks";
import { useState } from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

function Layout({ children }) {
  const viewportWidth = useViewportWidth();
  const [openSidebar, setOpenSidebar] = useState(false);
  const isBox = viewportWidth <= 1024 ? "Box" : "main";
  return (
    <Box>
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <SideBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <MainContent openSidebar={openSidebar} component={isBox}>
        <Box
          className="toggle_icon"
          onClick={() => {
            setOpenSidebar((prev) => !prev);
          }}
        >
          {openSidebar ? (
            <KeyboardArrowLeftRoundedIcon />
          ) : (
            <KeyboardArrowRightRoundedIcon />
          )}
        </Box>
        <Box>{children}</Box>
      </MainContent>
    </Box>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
