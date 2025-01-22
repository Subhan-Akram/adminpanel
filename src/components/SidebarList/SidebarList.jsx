import { useLocation, useNavigate } from "react-router-dom";
import { SidebarListWrapper } from "./style";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const SidebarList = ({ data, subMenu, openSidebar }) => {
  const navigate = useNavigate();

  const { title, Icon, path, activeTabValue } = data;
  const { pathname } = useLocation();
  const getPath = () => {
    if (pathname.includes("home")) return "";
    else {
      return pathname.split("/")[1].replace("/", "");
    }
  };
  const getSubPath = () => {
    return pathname.split("/")[2]?.replace("/", "");
  };
  const activePath = subMenu
    ? activeTabValue === getSubPath()
    : activeTabValue === getPath();
  return (
    <SidebarListWrapper
      open={openSidebar}
      subMenu={subMenu}
      className={`${activePath && "listItemActive"} ${subMenu}`}
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
    </SidebarListWrapper>
  );
};

export default SidebarList;
