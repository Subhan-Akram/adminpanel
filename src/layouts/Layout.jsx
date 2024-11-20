import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Navbar, SideBar } from "../components";
import { MainContent } from "./style";
import { useViewportWidth } from "hooks";
import { useState } from "react";

function Layout({ children }) {
  const viewportWidth = useViewportWidth();
  const [openSidebar, setOpenSidebar] = useState(false);
  const isBox = viewportWidth <= 1024 ? "Box" : "main";
  return (
    <Box>
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <SideBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <MainContent component={isBox}>{children}</MainContent>
    </Box>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
