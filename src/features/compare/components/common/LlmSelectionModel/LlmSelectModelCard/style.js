import { Box, styled } from "@mui/material";
import { flex, flexStart, justifyBetween } from "globalStyles/GlobalStyles";

export const LlmSelectionModelCardWrapper = styled(Box)(({ theme }) => {
  return {
    padding: "16px",
    borderRadius: "8px",
    position: "relative",
    border: "1px solid var(--border-1)",
    background: "var(--surface-l1)",
    "& .integrated_chips": {
      position: "absolute",
      top: "3rempx",
      right: "12px",
    },
    "&:hover": {
      border: "1px solid var(--border-2)",
      background: "var(--surface-l1)",
      boxShadow: "-5px 5px 50px 4px rgba(255, 255, 255, 0.05)",
      "& .card_title": {
        textDecoration: "underline",
        textUnderlineOffset: "4px",
      },
    },
    "@media (min-width: 1300px)": {
      minWidth: "367px",
    },

    "&.active_card": {
      border: "1px solid var(--border-primary)",
      background: "var(--surface-yellow-bg)",
      boxShadow: "0px 4px 10px 4px rgba(72, 85, 116, 0.04)",
    },
    "& .card_content > .text_left": {
      display: "-webkit-box",
      WebkitLineClamp: 3, // Number of lines to show
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "& .rating_box": {
      display: "flex",
      justifyContent: "space-between",
      // width: "310px",
      // border: "1px solid red",
    },

    "& .rating": {
      display: "flex",
      justifyContent: "flex-start",
      // alignItems:"center",
      gap: "4px",
      "& .MuiRating-root": {
        fontSize: "14px",
        marginTop: "4px",
      },
    },

    "& .logo_frame": {
      padding: "10px",
      width: "80px",
      height: "80px",
      boxSizing: "border-box",
      background: "var(--model-icon-bg)",
      borderRadius: "8px",
      "& svg": {
        width: "100%",
        height: "100%",
      },
      "& img": { width: "100%", height: "100%", objectFit: "contain" },
    },
    "& .checkbox": {
      position: "absolute",
      top: "16px",
      right: "0",
      display: "flex",
      justifyContent: "flex-end",
    },
    "& .header": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "8px",
    },
    "& .header_right": {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    "& .MuiDivider-root": {
      margin: "12px 0",
    },
    "& .content": {},
    "& .chips_box": {
      ...flex,
      ...flexStart,
      gap: "6px",
      marginTop: "10px",
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
      border: "1px solid var(--red)",
      display: "flex",
      background: "var(--surface-red-bg)",
      justifyContent: "space-between",
      "& .MuiBox-root": {
        visibility: "hidden",
      },
      "&:hover": {
        border: "1px solid var(-red-900)",
        background: "var(--surface-red-bg)",
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
        "& svg": {
          "& path": {
            fill: "var(--icon-primary)",
          },
        },
      },
    },
    // border-radius: 8px;
  };
});
