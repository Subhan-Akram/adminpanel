import { Box, styled } from "@mui/material";

export const PromptWriteWrapper = styled(Box)(
  ({ isCardSelected, sidebarOpen }) => ({
    display: "flex",
    width: "80%",
    maxWidth: "929px",
    margin: "auto auto",
    marginTop: "14px",
    minHeight: "64px",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "0px 0 0 16px",
    border: "1px solid var(--border-1)",
    position: "relative",
    background: "var(--surface-l2)",
    "@media screen and (min-width:1550px)": {
      width: "95%",
      maxWidth: "1350px",
    },
    "&:hover": {
      border: "1px solid var(--border-primary)",
    },
    "& .shadow": {
      position: "absolute",
      left: "0",
      top: "0",
      zIndex: "10",
      height: "100%",
      borderRadius: "8px",
      "& img": {
        borderRadius: "8px",
      },
    },
    "& .startIcon": {
      zIndex: "20",
      marginRight: "16px",
      width: "29px",
      padding: "7px 0 10px 0",
      marginTop: "-100px",
      height: "41px",
      alignSelf: "flex-end",
      objectFit: "contain",
    },
    "& .input_prompt": {
      width: "100%",
      border: "none",
      maxHeight: "150px !important",
      padding: "18px 0",
      boxSizing: "border-box",
      resize: "none",
      fontFamily: "satoshi",
      background: "var(--surface-l2)",
      color: "var(--text-secondary)",
      fontSize: "var(--typographyFontsizeM, 16px)",
      fontStyle: " normal",
      fontWeight: "400",
      borderRadius: "8px",
      lineHeight: "var(--typographyLineHeightLh24, 24px)",
      "&:focus": {
        outline: "none",
        boxShadow: "none",
      },
      "&:hover": {
        outline: "none",
        boxShadow: "none",
        background: "var(--surface-l2)",
      },
      "&::placeholder": {
        fontFamily: "satoshi",
        color: "var(--text-secondary)",
        fontSize: "var(--typographyFontsizeM, 16px)",
        fontStyle: " normal",
        fontWeight: "400",
        lineHeight: "var(--typographyLineHeightLh24, 24px)",
      },
    },
    "& .MuiIconButton-root": {
      width: "64px",
      height: "62px",
      borderRadius: "8px",
      background: "var(--model-icon-bg)",
      alignSelf: "flex-end",
      padding: 0,
      display: "flex",
      alignItems: "center",

      justifyContent: "center",
      "&.send_btn": {
        position: "absolute",
        bottom: "0",
        right: "0",
      },
      "& svg": {
        "& path": {
          fill: "var(--icon-primary)",
        },
      },
      "&.Mui-disabled": {
        // background: "#202939",
        "& svg": {
          "& path": {
            fill: "var(--icon-disable)",
          },
        },
      },
    },
  }),
);
