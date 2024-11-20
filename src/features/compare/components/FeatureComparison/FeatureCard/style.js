import { Card, styled } from "@mui/material";

export const FeatureComparisionWrapper = styled(Card, {
  shouldForwardProp: (props) => props !== "cancelActive",
})(({ cancelActive }) => ({
  margin: "1rem 0 0 0",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius: "8px",
  height: "calc(100% - 50px)",
  // cam-@1
  // border: "1px solid #202939",
  // background: "#0D121C",
  "& .comparision_title": {
    cursor: "pointer",
  },
  "& .cancel_icon": {
    position: "absolute",
    display: cancelActive ? "inherit" : "none",
    top: "0",
    cursor: "pointer",
  },
  "& .right_box_1": {
    position: "absolute",
    right: "-27px",
    display: "flex",
    marginTop: "0",
  },
  "& .logo_box": {
    borderRadius: "8px",
    background: "var(--model-icon-bg)",
    padding: "10px",
    width: "80px",
    height: "80px",
    boxSizing: "border-box",
    "& img": {
      objectFit: "contain",
    },
  },
  "& .header": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    marginTop: "8px",
  },
  "& .card_btn_1": {
    marginTop: "16px",
  },
  "& .MuiDivider-root": {
    margin: "16px 0",
  },
  "& .rating": {
    display: "flex",
    justifyContent: "flex-start",

    gap: "4px",
    "& .MuiRating-root": {
      fontSize: "14px",
      marginTop: "4px",
    },
  },
  "& .grid_container": {
    border: "1px solid green",
  },
  "& .feature_content_box": {
    width: "100%",
    "& .item": {
      marginBottom: "16px",
      "& ul": { margin: "8px 0" },
    },
  },

  "& .card_title_3": {
    marginLeft: "3px",
  },
  "& .link": {
    marginLeft: "3px",
  },
  "& .integrated_chips": {
    position: "absolute",
    top: "32px",
    right: "16px",
    display: "none",
  },
  "@media (max-width: 820px)": {
    "& .cancel_icon": {
      // "& svg": {
      //   width: "24px",
      //   height: "24px",
      // },
    },
    "& .logo_box": {
      width: "60px",
      height: "60px",
    },
    "& .feature_content_box": {
      "& .item": {
        "& ul": {
          paddingLeft: "26px",
        },
      },
    },
  },
}));
