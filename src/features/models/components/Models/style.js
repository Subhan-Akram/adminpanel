import { Box, Button, styled } from "@mui/material";
import {
  alignCenter,
  flex,
  flexEnd,
  justifyBetween,
} from "styles/GlobalStyles";

export const ModelSearchWrapper = styled(Box)(() => ({
  "& .model_header": {
    padding: "24px",
    ...flex,
    ...justifyBetween,
    ...alignCenter,
    borderBottom: "1px solid var(--primary-color-18)",
  },
  "& .model_search_box": {
    width: "67%",
    minWidth: "700px",
    marginBottom: "32px",
    marginTop: "24px",
  },
  "& .banner_box": {
    marginTop: "26px",
  },
  "& .zero_state": {
    marginTop: "6rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .search_content": {
    padding: "31px 32px",
    minHeight: "80vh",
    "& .model_page_header": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    "& .compare_btn": {
      minWidth: "185.55px !important",
    },
    "& .MuiBreadcrumbs-separator": { marginLeft: "2px", marginRight: "2px" },
    "& .MuiBreadcrumbs-li": {
      fontSize: "12px",
      fontFamily: "satoshi",
      fontWeight: 400,
      "& p": {
        fontSize: "12px",
        color: "#9AA4B2",
      },
      "& a": {
        color: "#E3E8EF",

        textDecoration: "none",
      },
      "& svg": {
        fontSize: "16px",
      },
    },
  },
  "& .model_footer": {
    ...flex,
    ...flexEnd,
    ...alignCenter,
    gap: "24px",
    padding: "24px",
  },
  "& .loader_grid": {
    marginTop: "3rem",
  },
  "& .model_container": {
    marginTop: "0px",
  },
  "@media screen and (max-width:1024px)": {
    "& .search_content": {
      marginTop: "34px",
    },
  },
}));

export const ModelButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "styleProps",
})(({ styleProps: { bgColor, color, borderColor } }) => {
  return {
    boxSizing: "border-box",
    background: bgColor,
    color: color,
    border: `1px solid ${borderColor}`,
    textTransform: "capitalize",
    fontWeight: "500 !important",
    borderRadius: "8px",
    padding: "8px 16px",
    "&:hover": {
      background: bgColor,
    },
  };
});
