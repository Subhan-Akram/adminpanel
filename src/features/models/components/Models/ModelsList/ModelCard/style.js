import { Box, styled } from "@mui/material";
import {
  flex,
  flexStart,
  justifyBetween,
} from "../../../../../../styles/GlobalStyles";

export const ModelCardWrapper = styled(Box)(({ theme }) => ({
  border: "1px solid var(--border-1)",
  padding: "8px 16px 24px 16px",
  borderRadius: "8px",
  position: "relative",
  // background: "#0D121C",
  background: "var(--surface-l1)",
  "&:hover": {
    border: "1px solid var(--border-2)",
    background: "var(--surface-l1)",
    boxShadow: "-5px 5px 50px 4px rgba(255, 255, 255, 0.05)",
    "& .card_title": {
      textDecoration: "underline",
      textUnderlineOffset: "4px",
      cursor: "pointer",
    },
  },
  "@media (min-width: 1300px)": {
    minWidth: "367px",
  },
  "& .tags_not_available": {
    height: "32px",
  },
  "&.active_card": {
    background: "var(--surface-yellow-bg)",
    border: "1px solid var(--border-primary)",
  },
  "& .card_content > .text_left": {
    display: "-webkit-box",
    WebkitLineClamp: 3, // Number of lines to show
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
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
  "& .integrated_chips": {
    position: "absolute",
    top: "16px",
    left: "16px",
    width: "82px",
  },

  "& .logo_box": {
    zIndex: "1000",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",

    position: "relative",
  },
  "& .logo_frame": {
    padding: "10px",
    width: "60px",
    height: "60px",
    position: "absolute",
    top: "-2rem",
    background: "var(--model-icon-bg)",
    borderRadius: "8px",
    "& img": {
      objectFit: "contain",
    },
  },
  "& .checkbox": {
    display: "flex",
    justifyContent: "flex-end",
  },
  "& .header": {
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
  },
  "& .MuiDivider-root": {
    margin: "12px 0",
  },
  "& .content": {
    // border: "1px solid red",
  },
  "& .chips_box": {
    ...flex,
    ...flexStart,
    gap: "6px",
    marginTop: "16px",
    flexWrap: "wrap",
  },
  "& .btn_groups": {
    ...flex,
    ...justifyBetween,
    flexDirection: "column",
    gap: "16px",
    marginTop: "24px",
    "& .sideBarTitle": {
      "& svg": {
        marginLeft: "6px",
      },
    },
  },
  "& .remove_btn": {
    border: "1px solid #EF4444",
    display: "flex",
    background: "var(--Surface-Bg-Layers-Red-Bg)",
    justifyContent: "center",
    "& svg": {
      position: "absolute",
      right: "10px",
    },

    "&:hover": {
      border: "1px solid #EF4444",
    },
  },
  "& .btn_inner_group": {
    ...flex,
    ...flexStart,
    alignItems: "center",
    gap: "16px",
    "& .primary_1": { width: "100%" },
    "& .dot_icon_option": {
      padding: "8px !important",
      minWidth: "0",
      height: "40px",
      width: "40px",
      border: "1px solid var(--border-2)",
      "& svg": {
        "& path": {
          fill: "var(--icon-primary)",
        },
      },
    },
  },
}));
