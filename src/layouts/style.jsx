import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  drawerWidth,
  fullDrawerWidth,
} from "../constants/drawerAndNavbarHeight";

export const MainContent = styled(Box)(({ theme, openSidebar }) => ({
  position: "relative",
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
  background: "var(--surface-l0)",
  zIndex: 1,
  "& .page_spacing": {
    paddingTop: "31px",
    paddingLeft: "32px",
    paddingRight: "32px",
  },
  "& .prompt_layout": {
    height: "calc(100vh - 162px)",
    overflow: "auto",
  },
  "& .try_prompt_layout": {
    height: "calc(100vh - 130px)",
    overflow: "auto",
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
    "& .page_spacing": {
      marginTop: "34px",
      paddingLeft: "24px",
      paddingRight: "24px",
    },
    "& .prompt_layout": {
      height: "calc(100vh - 169px)",
      paddingLeft: "24px",
      paddingRight: "25px !important",
    },
    "& .try_prompt_layout": {
      height: "calc(100vh - 91px)",
    },
  },
  "@media screen and (max-width:930px)": {
    "& .page_spacing": {
      marginTop: "34px",
      paddingLeft: "24px",
      paddingRight: "24px",
    },
  },
  "@media screen and (max-width:715px)": {
    "& .prompt_layout": {
      height: "calc(100vh - 151px)",
    },
  },
}));
