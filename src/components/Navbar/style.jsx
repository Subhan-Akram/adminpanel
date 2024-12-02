import { styled } from "@mui/material/styles";
import MuiToolBar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import { navbarHeight } from "constants";
import {
  drawerWidth,
  fullDrawerWidth,
} from "../../constants/drawerAndNavbarHeight";

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
    // border: "1px solid yellow",

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
})(({ theme, open }) => ({
  backgroundColor: "var( --sidenav-background)",
  borderBottom: "1px solid var(--sidenav-border)",
  width: "96.3%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    padding: "0 8px",
  },
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: 150,
  height: navbarHeight,

  backgroundColor: "var(--sidenav-background)",
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
    "& .arrow_icon": {
      marginTop: "8px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    // "&.MuiBox-root :nth-of-type(3)": {
    //   "& .MuiSvgIcon-root": {
    //     color: "var(--primary-color-3)",
    //   },
    // },
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
  },

  "& .logoRoot": {
    width: "249px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "30px",
    "& .menu_icon": {
      cursor: "pointer",
    },
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
    "& svg": {
      height: "100% !important",
      cursor: "pointer",
      "& path": {
        fill: "var(--logo)",
      },
    },
    "@media screen and (min-width:1025px)": {
      "& .menu_icon": {
        // display: "none",
      },
    },
    "& img": {
      width: "100% !important",
      height: "100% !important",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      // width: "90px",
      // height: "35px",
    },
    "&.MuiBox-root > :nth-of-type(1)": {
      height: "23px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .profileRoot": {},
  },
}));
