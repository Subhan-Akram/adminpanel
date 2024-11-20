import { Box, styled } from "@mui/material";

export const ChatSkeletonWrapper = styled(Box)(() => ({
  borderRadius: "0px 8px 8px 8px",
  background: "var(--surface-l2)",
  boxShadow: "0px 0px 8px 4px rgba(0, 0, 0, 0.03)",
  padding: "8px 16px 16px 16px",
  boxSizing: "border-box",
  width: "80%",
  cursor: "pointer",

  "& .MuiSkeleton-root": {
    marginBottom: "10px",
  },
}));
export const TabWrapper = styled(Box)(() => ({
  "&.model_tabs": {
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
}));
