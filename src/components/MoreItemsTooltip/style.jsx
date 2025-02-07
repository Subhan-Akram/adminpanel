import {
  Autocomplete,
  Popper,
  styled,
  Tooltip,
  tooltipClasses,
  Box,
} from "@mui/material";
export const MoreItemsTooltipWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

export const ChipTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 300,
    borderRadius: "8px",
    padding: "12px",
    border: "1px solid var(--border-2)",
    background: "var(--surface-l3)",
    "& .tooltip_content": {
      display: "flex",
      gap: "8px",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
      "& svg": {
        fontSize: "12px",
        color: "var(--primary-1)",
        marginLeft: "-5px",
      },
    },
    "& .MuiTooltip-arrow": {
      color: "var(--surface-l3)",
      width: "33px",
      marginBottom: "-1.1rem",
      height: "18px",
      "&::before": {
        border: "1px solid var(--border-2)",
        background: "var(--surface-l3)",
        width: "16px",
        height: "16px",
      },
    },
  },
});
