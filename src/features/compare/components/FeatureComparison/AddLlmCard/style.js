import { Box, styled } from "@mui/material";

export const LlmCardWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "isCardSelected",
})(({ isCardSelected }) => ({
  boxSizing: "border-box",
  border: "1px solid var(--border-1)",
  background: "var(--surface-l1)",
  marginTop: isCardSelected ? "17px" : "",
  paddingTop: isCardSelected ? "16px" : "",
  minWidth: "390px",
  borderRadius: "8px",
  textAlign: "center",
  height: isCardSelected ? "calc(100% - 17px)" : "100%",
  position: "relative",
  "& .add_llm_container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    top: isCardSelected ? "34vh" : "0",
    gap: "24px",
    height: isCardSelected ? "auto" : "100%",
    position: isCardSelected ? "sticky" : "relative",
    left: isCardSelected ? "0px" : "",

    "& .MuiButton-root": {
      maxWidth: "250px",
    },
    "& .right_box_1": {
      position: "absolute",
      right: "-29px",
      marginTop: "-240px",
      display: isCardSelected ? "none" : "flex",
      "& svg": {
        "& path": {
          fill: "var(--icon-disable)",
        },
      },
    },
  },
  "@media (max-height: 700px)": {
    minWidth: "300px",
  },
  "@media (max-width: 1360px)": {
    minWidth: "0",
  },
  "@media (max-width: 1024px)": {
    padding: "0 12px",

    "& .add_llm_container": {
      marginTop: "12px",
      "& .right_box_1": {
        right: "-40px",
      },
    },
  },
  // "@media (max-width: 830px)": {
  //   "& .add_llm_container": {
  //     "& .right_box_1": {
  //       right: "-32px",
  //       "& svg": {
  //         width: "22px",
  //         height: "22px",
  //       },
  //     },
  //   },
  // },
}));
