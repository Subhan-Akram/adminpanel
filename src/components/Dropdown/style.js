import { borderBottom } from "@mui/system";
import "../../fonts/fonts.css";
import { Box, Menu, MenuItem, styled } from "@mui/material";

export const DropdownWrapper = styled(Box)`
  &.show_only_icon {
    border: none !important;
    background: none !important;
    padding: 0 !important;
    & svg path {
      fill: var(--icon-primary);
    }

    & .MuiButton-root {
      border: none;
      background: none !important;
      min-width: 20px;
      padding: 0 !important;
      &:hover {
        border: none !important;
      }
    }
  }
  & .MuiButton-root {
    padding: 4px 6px;
    min-width: 0;
    height: auto !important;
    border: transparent !important;
    &:hover {
      border: 1px solid var(--border-1);
    }
  }
`;

export const StyledMenu = styled(Menu, {
  shouldForwardProp: (props) => props !== "width",
})(({ width }) => ({
  "& .MuiPaper-root": {
    width: width ?? "125px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    marginTop: "4px",

    background: "var(--surface-l1)",
    // "& .MuiMenuItem-root": {
    //   "&:not(:last-child)": {
    //     borderBottom: "1px solid var(--border-1) !important",
    //   },
    // },

    "& .MuiList-root": {
      padding: "0",
    },
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "8px",
  padding: "10px 8px",
  color: "var(--text-tertiary)",
  fontWeight: 400,
  fontFamily: "satoshi",
  fontSize: "14px",
  textWrap: "wrap",
  "& .MuiSvgIcon-root": {
    fontSize: "16px",
  },
  "&:hover": {
    background: "var(--surface-l2)",
    color: "var(--text-primary)",
    fontFamily: "satoshi",
    fontWeight: 500,
    "& svg": {
      "& path": {
        fill: "var(--text-primary)",
      },
    },
    "& .MuiSvgIcon-root": {
      "& path": {
        fill: "var(--text-primary)",
      },
    },
  },
}));
