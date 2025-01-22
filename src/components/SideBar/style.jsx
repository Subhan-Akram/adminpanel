import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { drawerWidth } from "constants";
import { fullDrawerWidth } from "../../constants/drawerAndNavbarHeight";

const openedMixin = (theme) => ({
  width: fullDrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => {
  return {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    overflowX: "hidden",
    "@media screen and (max-width:1024px)": {
      width: "0",
    },
    backgroundColor: "var(--sidenav-background)",
  };
};

export const DrawerStyle = styled(
  MuiDrawer,
  { shouldForwardProp: (props) => props !== "open" },
  {
    shouldForwardProp: (prop) => prop !== "open" || prop !== "active",
  },
)(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  opacity: 1,
  "& .toggle_icon": {
    border: "1px solid red",
    position: "absolute",
    top: "5rem",
    right: "-1rem",
    zIndex: 1000,
  },
  "&.MuiDrawer-docked": {
    width: "0px",
  },

  "& .themeToggleBox": {
    display: "flex",
    justifyContent: "center",
  },
  "& .MuiDrawer-paper": {
    "& .sidebar_header": {
      height: "66.47px",
      padding: "0 4px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .logo": {
        cursor: "pointer",
        marginTop: "6px",
        "& svg": {
          width: "100% !important",
          height: "100% !important",

          "& path": {
            fill: "var(--logo)",
          },
        },
      },
    },
    ...(open && {
      ...openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
    }),
    boxSizing: "border-box",
    zIndex: 100,
    backgroundColor: "var(--sidenav-background)",
    borderRight: "1px solid var(--sidenav-border)",
    borderTop: "1px solid var(--sidenav-border)",
    marginTop: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "32px",
    alignItems: "flex-start",
    height: `100%`,
    padding: "0px",
    "@media screen and (max-width:1024px)": {
      transition: "transform 0.2s ease-in-out",
      transform: open ? "translateX(0%)" : "translateX(-150px)",
      opacity: 1,
    },
  },
}));

export const StyledList = styled(
  List,
  { shouldForwardProp: (props) => props !== "open" },
  {
    shouldForwardProp: (prop) => prop !== "open" || prop !== "active",
  },
)(({ open }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "0 16px",
  };
});
