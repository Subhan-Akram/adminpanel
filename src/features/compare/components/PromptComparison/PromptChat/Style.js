import { Box, styled } from "@mui/material";

export const PromptChatWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "isTryPrompt",
})(({ isTryPrompt }) => ({
  display: "flex",
  flexDirection: "column",
  "& .request_prompt": {
    borderRadius: "8px",
    background: "var(--surface-l2)",
    boxShadow: "0px 0px 8px 4px rgba(0, 0, 0, 0.03)",
    padding: "8px 16px",
    marginBottom: "17.41px",
    justifySelf: "flex-end",
    alignSelf: "flex-end",
    paddingRight: "133px",
  },

  "& .prompt_response": {
    borderRadius: "0px 8px 8px 8px",
    background: "var(--surface-l2)",
    boxShadow: "0px 0px 8px 4px rgba(0, 0, 0, 0.03)",
    padding: "8px 16px 16px 16px",
    marginBottom: "10px",
    width: "80%",

    "& .sully_response": {
      paddingRight: "133px",
    },
    "& .prompt_response_header": {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      "& .model_chip": {
        borderRadius: "4px",
        background: "var(--Tags-Purple-Purple-Bg, #130033)",
        padding: "4px",
        color: "#C77DFF",
        fontSize: "12px",
        fontWeight: "500",
      },
      "& .text_btn": {
        textDecoration: "underline",
        lineHeight: "20px" /* 142.857% */,
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },
  "& .prompt_container": {
    position: "relative",
  },
  "& .model_tabs": {
    top: "-3.3rem",
    left: "0",
    position: "absolute",
    display: "flex",
    justifyContent: "flex-start",
  },
  "& .tab": {
    background: "#121926",
    clipPath: "polygon(0 0, 72% 0, 100% 100%, 0% 100%)",
    width: "60px",

    height: "53px",
    display: "flex",
    alignItems: "center",

    "& svg": {
      width: "25px",
      height: "15px",
      marginLeft: "12px",
    },
    "& img": {
      width: "25px",
      height: "15px",
      marginLeft: "12px",
      objectFit: "contain",
    },
  },
  "& .tab_margin": {
    marginLeft: "-8px",
  },
  "& .active": {
    background: "#202939",
    zIndex: "20",
  },
  "& .prompt_response_content": {
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "16px",
    height: isTryPrompt ? "calc(100vh - 298px)" : "calc(100vh - 305px)",
    overflowY: " auto",
    background: "var(--surface-l0)",
    borderRadius: "16px",

    "@media screen and (max-width: 1024px)": {
      height: isTryPrompt ? "calc(100vh - 276px)" : "calc(100vh - 298px)",
    },
  },

  "@media screen and (max-width:1080px)": {
    gap: "52px",
  },
}));
