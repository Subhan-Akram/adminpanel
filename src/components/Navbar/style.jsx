import { styled } from "@mui/material/styles";
import MuiToolBar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import { navbarHeight } from "constants";
import { drawerWidth, fullDrawerWidth } from "constants";
import { Box } from "@mui/material";

const openedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  width: `calc(100% - ${fullDrawerWidth})`,
  overflowX: "hidden",
});

const closedMixin = (theme) => {
  return {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: `calc(100% - ${drawerWidth})`,
    overflowX: "hidden",
  };
};
export const ToolBar = styled(MuiToolBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  backgroundColor: "var(--sidenav-background)",
  borderBottom: "1px solid var(--sidenav-border)",
  width: "calc(100% - 50px)",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    padding: "0 8px",
    width: "calc(100% - 10px)",
  },
}));

export const AppBar = styled(
  MuiAppBar,
  { shouldForwardProp: (props) => props !== "open" },
  {
    shouldForwardProp: (prop) => prop !== "open",
  },
)(({ theme, open }) => ({
  zIndex: 150,
  height: navbarHeight,
  backgroundColor: "var(--sidenav-background) !important",
  backgroundImage: "none",
  ...(open && {
    ...openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
  }),

  boxShadow: "none",
  border: "var(--border-color)",
  "& .profileRoot": {
    display: "flex",
    justifyContent: "flex-start",
    gap: "52px",

    alignItems: "center",
    "& .icon_text": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "10px",
    },
    "& .profile_icon": {},
    "& .user_avatar": {
      width: "32px",
      height: "32px",
      color: "white",
      fontSize: "16px",
      background: "var(--border-1)",
    },
    "& .arrow_icon": {
      marginTop: "8px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("sm")]: {
      gap: "5px",
      "&.MuiBox-root :nth-of-type(3)": {
        marginLeft: "-3px",
        marginTop: "8px",
        border: "1px solid red",
      },
    },
  },
  "& .drop_down_Box": {
    cursor: "pointer",
    "& .show_only_icon": {
      border: "1px solid red",
    },
  },

  "& .logoRoot": {
    width: "249px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "24px",
    "& .tablet_toggle_btn": {
      display: "none",
    },
    "& .logo_text": {
      cursor: "pointer",
    },
    "& .logo": {
      display: "none",
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
    "& svg": {
      height: "100% !important",
      cursor: "pointer",
      "& path": {
        fill: "var(--logo)",
      },
    },

    "& img": {
      width: "100% !important",
      height: "100% !important",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {},
    "&.MuiBox-root > :nth-of-type(1)": {},
  },
  [theme.breakpoints.down("sm")]: {
    "& .profileRoot": {},
  },
  "@media (max-width: 1024px)": {
    width: "100%",
    "& .logoRoot": {
      "& .logo_text": {
        display: "none",
      },
      "& .logo": {
        display: "block",
      },
      "& .tablet_toggle_btn": {
        display: "block",
        width: "32px",
        height: "32px",
      },
    },
  },
}));

export const ThemeToggleContainer = styled(Box)(({ mode }) => {
  return {
    // display: "none",
    width: "32px",
    height: "108px",
    transform: "rotate(270deg)",

    borderRadius: "50px",
    background: "var(--switch-bg)",
    display: "flex",
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
