import { Box, styled } from "@mui/material";

export const FeatureStyleWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "isCardSelected",
})(({ isCardSelected, theme }) => ({
  display: "flex",
  gap: "24px",
  marginBottom: "1rem",
  marginTop: "24px",
  height: !isCardSelected ? "calc(100vh - 340px)" : "100%",
  "& .grid_container": {},
  "@media (max-height: 700px)": {
    height: "calc(100vh - 315px)",
  },
  alignItems: "stretch",
  justifyContent: "center",
  "& .grid_item": {
    display: "flex",
    alignItems: "stretch",
    paddingBottom: "10px",
    paddingLeft: "24px",
    "& > .MuiGrid-item:first-of-type": {
      paddingLeft: 0,
    },
  },
  "& .grid_item_feature": {
    paddingLeft: "16px !important",
    [theme.breakpoints.up(830)]: {
      paddingLeft: "24px !important",
      "& > .MuiGrid-item:first-of-type": {
        paddingLeft: 0,
      },
    },
  },

  "& .left_box": {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  "& .right_box_feature_icon": {
    position: "absolute",
    right: "-27px",
    display: "flex",
    marginTop: "96px",
    "& svg": {
      "& path": {
        fill: "var(--icon-disable)",
      },
    },
    "&.active_swap": {
      cursor: "pointer",
      "& svg": {
        "& path": {
          fill: "var(--icon-brand)",
        },
      },
    },
  },

  "@media (max-width: 820px)": {
    "& .right_box_feature_icon": {
      right: "-18px",
      "& svg": {
        width: "22px",
        height: "22px",
      },
    },
  },
}));
