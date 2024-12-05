import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  drawerWidth,
  fullDrawerWidth,
} from "../constants/drawerAndNavbarHeight";
import { borderRadius, display, fontSize } from "@mui/system";

export const MainContent = styled(Box)(({ theme, openSidebar }) => ({
  position: "relative",
  zIndex: "100 !important",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth})`,
  ...(openSidebar && {
    marginLeft: fullDrawerWidth,
    width: `calc(100% - ${fullDrawerWidth})`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  // marginLeft: openSidebar ? fullDrawerWidth : drawerWidth,
  marginTop: "69px",
  // width: `calc(100% - 147px)`,
  // background: "#070B11 !important",
  "& .page_spacing": {
    paddingTop: "31px",
    paddingLeft: "32px",
    paddingRight: "32px",
  },
  "& .toggle_icon": {
    border: "1px solid var(--model-icon-bg)",
    position: "absolute",
    top: "10px",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--model-icon-bg)",
    left: "-11px",
    cursor: "pointer",
    // zIndex: 50,
    "& svg": {
      fontSize: "18px",
    },
  },
  "& .main_content": {
    padding: "32px",
  },
  ".page_title_box": {
    marginTop: "8px",
    marginBottom: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: "0",
  },
  "@media screen and (max-width:1024px)": {
    zIndex: "60 !important",
    "& .page_spacing": {
      marginTop: "34px",
      paddingLeft: "24px",
      paddingRight: "24px",
    },
  },
  "@media screen and (max-width:930px)": {
    "& .page_spacing": {
      marginTop: "34px",
      paddingLeft: "24px",
      paddingRight: "24px",
    },
  },
}));
