/* eslint-disable no-unused-vars */
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Box } from "@mui/material";
import { drawerWidth } from "constants";
import { navbarHeight } from "constants";
import zIndex from "@mui/material/styles/zIndex";

const openedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => {
  return {
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

export const DrawerStyle = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" || prop !== "active",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "space-between",
  backgroundColor: "var(--sidenav-background)",

  opacity: 1, // Opacity transition for larger screens

  "&.MuiDrawer-docked": {
    width: "0px",
  },

  "& .themeToggleBox": {
    display: "flex",
    justifyContent: "center",
  },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    backgroundColor: "var(--sidenav-background)",
    // backgroundColor: theme.custom.background,
    borderRight: "1px solid var(--sidenav-border)",
    marginTop: navbarHeight,
    display: "flex",
    width: drawerWidth,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "space-between",
    height: `calc(100% - ${navbarHeight})`,
    padding: "31px 0",
    "@media screen and (max-width:1024px)": {
      transition: "transform 0.3s ease-in-out",
      transform: open ? "translateX(0%)" : "translateX(-150px)",
      opacity: 1,
    },
  },
}));
export const StyledList = styled(List, {
  shouldForwardProp: (prop) => prop !== "open" || prop !== "active",
})(({ open }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "0 10px",
    "& .MuiListItemButton-root": {
      padding: "6px 4px 6px 12px",
      justifyContent: "center",
      "&:hover": {
        background: "none",
      },
    },
    "& .MuiListItemIcon-root": {
      minWidth: 0,

      justifyContent: "center",
      "& svg > path": {
        fill: "var(--sidenav-icon)",
      },
    },
    "& .MuiListItemText-root": {
      marginLeft: "10px",
      // display: open ? "block" : "none",
      // display: "none",
    },
    "& .listItemActive": {
      borderRadius: "3px",
      background: "var(--sidenav-bg-selected)",
      "& svg > path": {
        fill: "var(--sidenav-icon-selected)",
      },
    },
  };
});

export const ThemeToggleContainer = styled(Box)(({ mode }) => {
  return {
    display: "none",
    width: "32px",
    height: "108px",

    borderRadius: "50px",
    background: "var(--switch-bg)",
    // display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    padding: "4px 8px",
    position: "relative",
    transition: "padding 0.3s ease-in-out",
    "& .MuiBox-root": {
      borderRadius: "20px",
      padding: "12px 8px",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      position: "absolute",
      ...(mode === "light" && {
        "&.iconContainer-moon": {
          top: "60px",
          "& svg > path": {
            fill: "var(--primary-color-5)",
          },
        },
        "&.iconContainer-sun": {
          top: "4px", // Sun icon on the top for light mode
          background: "var(--sun-bg)",
          "& svg > g > path": {
            fill: "var(--sun-icon)",
          },
        },
      }),
      ...(mode === "dark" && {
        "&.iconContainer-sun": {
          top: "60px", // Move sun icon to the bottom in dark mode
        },
        "&.iconContainer-moon": {
          padding: "12px 8px",
          top: "4px", // Moon icon on the top for dark mode
          background: "var(--bg-active)",
        },
      }),
    },
  };
});

export const ThemeToggleBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
