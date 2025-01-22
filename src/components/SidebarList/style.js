import { ListItem, styled } from "@mui/material";

export const SidebarListWrapper = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "subMenu",
})(({ open, subMenu }) => {
  return {
    "&.subMenu": {
      marginLeft: "24px",
      display: open ? "block" : "none",
      backgroundColor: "var(--sidenav-background)",
      "& .MuiListItemButton-root": {
        padding: "0px 32px 0px 8px",
      },
    },
    "& .MuiListItemButton-root": {
      padding: open ? "6px 32px 6px 8px" : "6px 8px",
      justifyContent: "center",
      "& .MuiListItemIcon-root": {
        minWidth: 0,
        justifyContent: "center",

        "& svg": {
          width: "24px",
          height: "24px",
          "& > path": {
            fill: "var(--sidenav-icon)",
          },
        },
      },
      "&:hover": {
        background: subMenu
          ? "var(--sidenav-background)"
          : "var(--sidenav-bg-selected)",
        borderRadius: "3px",
        color: "var(--brand-button-bg) !important",
        "& .MuiListItemIcon-root": {
          "& svg": {
            "& > path": {
              fill: "var(--brand-button-bg)",
            },
          },
        },
      },
    },

    "& .MuiListItemText-root": {
      marginLeft: open ? "22px" : "0",
      display: open ? "block" : "none",
      "& .MuiTypography-root": {
        fontSize: "16px",
      },
    },

    "&.listItemActive": {
      borderRadius: "3px",
      background: subMenu
        ? "var(--sidenav-background)"
        : "var(--sidenav-bg-selected)",
      "& svg > path": {
        fill: subMenu
          ? "var(--brand-button-bg)"
          : "var(--sidenav-icon-selected)",
      },
      "& .MuiListItemButton-root": {
        color: "var(--brand-button-bg)",
      },
      "& .MuiListItemIcon-root": {
        "& svg > path": {
          fill: subMenu
            ? "var(--brand-button-bg)"
            : "var(--sidenav-icon-selected)",
        },
      },
    },
  };
});
