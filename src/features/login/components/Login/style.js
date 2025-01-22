import { Box, Button, styled } from "@mui/material";

import MuiToolBar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";

export const LoginWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  display: "flex",
  padding: "44px",
  justifyContent: "center",
  boxSizing: "border-box",
  // background: "#121414",
  alignItems: "center",
  // border: "1px solid #121414",
  margin: "auto auto",
  marginTop: "82px",
  width: "488px",
  borderRadius: "16px",
  border: "1px solid var(--border-1, #202939)",
  background:
    "radial-gradient(107.32% 141.42% at 0% 0%, rgba(153, 129, 4, 0.10) 0%, rgba(8, 11, 17, 0.10) 100%)",

  position: "relative",
  "@media screen and (min-height:770px)": {
    marginTop: "182px",
  },
  "@media screen and (max-height:700px)": {
    marginBottom: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    border: "none",
    padding: "16px 22px",
    minWidth: "200px",
  },
  "& .join_text": {
    marginTop: "8px",
  },
  "& .oval_right": {
    position: "absolute",
    right: "-44px",
    width: "90px",
    height: "90px",
    top: "42px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  "& .oval_left": {
    position: "absolute",
    left: "-48px",
    width: "90px",
    height: "90px",
    bottom: "50px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  "& .form_content": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    "& .typo_box": {
      marginBottom: "16px",
    },
  },
  "& form": {
    marginTop: "11px",
  },
  "& .form_field": {
    display: "flex",
    flexDirection: "column",
    marginBottom: "24px",

    "& label": {
      color: "#E3E8EF",
      fontSize: "16px",
      fontStyle: "normal",
      fontFamily: "satoshi",
      fontWeight: "500",
      lineHeight: "150%",
      marginBottom: "6px",
    },

    "& .MuiTextField-root": {
      flexGrow: 1,
      borderRadius: "10px",
      height: "100%",

      "& .MuiOutlinedInput-root": {
        color: "white",
        // padding: "24px",
        height: "48px",
        borderRadius: "10px",
        "& fieldset": {
          border: "1px solid  #364152",
        },
        "&:hover fieldset": {
          border: "1px solid  #364152",
        },
        "&.Mui-focused fieldset": {},
      },
      "& .MuiFormHelperText-root": {
        marginLeft: "0",
      },
    },
  },
  "& .dont_have_account": {
    display: "flex",
    gap: "4px",
    fontSize: "16px",
    fontFamily: "satoshi",
    color: "white",

    "& a": {
      color: "white",
      fontWeight: "400 !important",
    },
  },
  "& .red_shadow": {
    position: "fixed",
    border: "1px solid red",
    width: "320px",
    height: "320px",
    background:
      "linear-gradient(160deg, rgba(239, 68, 68, 0.40) 15.87%, rgba(239, 68, 68, 0.40) 86.88%)",
    filter: "blur(137.9550018310547px)",
    bottom: "0",
    right: "0",
  },
}));

export const LoginSubmitButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  padding: "20px 24px",
  height: "48px",
  marginTop: "8px",
  width: "100%",
  borderRadius: "10px",
  background:
    "var(--try, linear-gradient(95deg, #F9B300 13.23%, #FC2163 81.63%))",

  fontStyle: " normal",
  textTransform: "capitalize",
  marginBottom: "8px",
  color: "var(--brand-button-text-icon)",
  textAlign: "center",
  fontFamily: "satoshi",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "24px",
  "& .MuiCircularProgress-root": {
    marginLeft: "1rem",
  },
  "&:hover": {
    background:
      "var(--try, linear-gradient(95deg, #F9B300 13.23%, #FC2163 81.63%))",
  },
}));

export const ToolBar = styled(MuiToolBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  backgroundColor: "var(--primary-background)",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {},
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "var(--primary-background)",
  boxShadow: "none",
  border: "var(--border-color)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  "& .profileRoot": {
    display: "flex",
    justifyContent: "flex-start",
    gap: "24px",
    cursor: "pointer",
    alignItems: "center",
    "& .active_menu": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      "& .MuiSvgIcon-root": {
        fontSize: "14px",
        color: "#FFE629",
      },
    },
    "&.MuiBox-root :nth-of-type(2)": {
      borderRadius: "9999px",
      background: "rgba(30, 41, 59, 0.30)",
      padding: "2px 12px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "2px",
      "&.MuiBox-root :nth-of-type(3)": {
        marginLeft: "-3px",
        marginTop: "8px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  "& .MuiBox-root > :nth-of-type(3)": {
    marginTop: "5px",
  },
  "& .logoRoot": {
    width: "249px",
    height: "24px",
    display: "flex",
    gap: "8px",
    "& img": {
      width: "100% !important",
      height: "100% !important",
    },
    [theme.breakpoints.down("sm")]: {},
    "&.MuiBox-root > :nth-of-type(1)": {
      height: "46px",
    },
  },

  ...(open && {}),
}));

export const MainContent = styled(Box)(({ theme }) => ({
  marginLeft: "88px",
  marginTop: "79px",
  width: "calc(100% - 88px)",
  padding: "12px",
  background: "var(--primary-background)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: "0",
  },
  [theme.breakpoints.up("xl")]: {
    // marginTop:"100px"
  },
}));
