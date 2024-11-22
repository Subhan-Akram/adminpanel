import { Popover, styled } from "@mui/material";

export const PopoverWrapper = styled(Popover)(({ theme }) => ({
  "& .MuiPaper-root": {
    zIndex: 150,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    minWidth: "250px",
    background: "var(--surface-l0)",
    border: `1px solid var(--border-1)`,
  },
  "& .group_btn": {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
