import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { fontSize, minWidth, positions } from "@mui/system";
const getDesignTokens = (mode) => {
  const theme = createTheme();
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#3a091d",
            },
            secondary: {
              main: "#dc004e",
            },
          }
        : {
            primary: {
              main: "#90caf9",
            },

            secondary: {
              main: "#f48fb1",
            },
          }),
    },
    typography: {
      fontFamily: "satoshi",
      h1: {
        fontSize: 44,
        fontWeight: 700,
        [theme.breakpoints.down("sm")]: {
          fontSize: 28,
        },
      },
      h2: {
        fontSize: 32,
        [theme.breakpoints.down("sm")]: {
          fontSize: 22,
        },
      },
      h3: {
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
          fontSize: 19,
        },
      },
      h4: { fontSize: 20, fontWeight: 400 },

      h5: { fontSize: 18 },
      body1: {
        fontSize: 16,
        fontWeight: 400,
        //   color: '#333',
      },

      body2: {
        fontSize: 14,
        fontWeight: 400,
        // color: '#333',
      },

      subtitle1: {
        fontSize: 13.78,
      },
      subtitle2: {},
      caption: {
        fontSize: 12,
        //   color: '#888',
      },
      button: {
        fontSize: 20,
      },
    },
    breakpoints: {
      values: {
        xs: 0, // Extra-small screens (e.g., phones)
        sm: 600, // Small screens (e.g., tablets)
        md: 960, // Medium screens (e.g., small laptops)
        lg: 1350, // Large screens (e.g., desktops)
        xl: 1800, // Extra-large screens (e.g., large desktops)
        // You can customize these values as needed
      },
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            // backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(38, 38, 38)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            overflow: "hidden",
            border: "1px solid var(--border-1)",
            borderRadius: "8px",
            boxShadow: "inherit",
            "&.Mui-checked": {
              color: "var(--icon-brand)",
            },
          },

          cellCheckbox: {
            outline: "none",
            "& .Mui-checked": {
              color: "var(--icon-brand)",
            },
          },
          columnHeaderCheckbox: {
            outline: "none",
            "& .Mui-checked": {
              color: "var(--icon-brand)",
            },
          },
          cell: {
            color: "var(--primary-1)",
            "&:focus": {
              outline: "none",
            },
            "&:focus-within": {
              outline: "none",
            },
          },
          columnHeader: {
            "&:focus-within": {
              outline: "none",
            },
            "&:focus": {
              outline: "none",
            },
            backgroundColor: "var(--surfcae-l0)",
            color: "var(--primary-1)",
          },

          columnHeaderTitle: {
            fontWeight: "700",
            fontSize: ".75rem",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            zIndex: "110",
            borderRadius: "8px",
            border: "1px solid var(--border-1)",
            background: "var(--surface-l1)",
            padding: "16px",
            boxShadow: "none",
          },
        },
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            background: "var(--model-icon-bg)",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            width: "100%",
            borderRadius: "10px",
            background: "var(--border-1)",
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "var(--icon-tertiary)",
            "&.Mui-checked": {
              color: "var(--icon-brand)",
              "&:hover": {},
            },
            "&.MuiCheckbox-indeterminate": {
              color: "var(--icon-brand)",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          text: {
            color: "var(--text-brand)",
            fontSize: "16px",
            fontWeight: "500",
            textTransform: "none",
            fontFamily: "satoshi",
          },

          root: {
            "&:hover": {
              background: "transparent",
            },
            "&.Mui-disabled": {
              borderRadius: "8px",
              fontFamily: "satoshi",
              fontWeight: "500",
              background: "var(--brand-primary-button-bg-disable)",
              color: "var(--brand-primary-text-icon-disable) !important",
              border: `1px solid var(--brand-primary-button-bg-disable) !important`,
              "&:hover": {
                background: "var(--primary-button-hover-border)",
              },
            },
          },
        },
      },
      MuiBreadcrumbs: {
        styleOverrides: {
          separator: {
            marginLeft: "2px",
            marginRight: "2px",
            "& svg": {
              width: "12px",
              "& path": {
                fill: "var(--primary-1) !important",
              },
            },
          },
          li: {
            fontSize: "12px",
            fontFamily: "satoshi",
            fontWeight: 400,
            "& p": {
              fontSize: "12px",
              color: "var(--text-tertiary) !important",
            },
            "& a": {
              color: "var(--text-primary) !important",
              textDecoration: "none",
              cursor: "pointer",
            },
            // "& svg": {
            //   fontSize: "16px",
            //   "& path": {
            //     fill: "var(--primary-1)",
            //   },
            // },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            "& .MuiAutocomplete-listbox": {
              background: "var(--surface-l1) !important",
            },
            "& .MuiFilledInput-root": {
              border: "none",
              overflow: "hidden",
              height: "56px",
              // paddingRight: "0 !important",

              background: "#080B11",
              displayu: "flex",
              justifyContent: "flex-start",
              gap: "10px",
              padding: "10px  0 !important",

              // border:"1px solid red",

              "&:hover fieldset": {
                border: "none",
                background: "#080B11 !important",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },

            "& .MuiFilledInput-root::before ": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root:hover:not(.Mui-disabled)::before": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root::after": {
              borderBottom: "none",
            },

            "& .MuiAutocomplete-popupIndicator": {
              display: "none",
            },
            "& .MuiAutocomplete-clearIndicator": {
              display: "none",
            },
            "& .MuiAutocomplete-tag": {
              fontSize: "12px",
              fontWeight: "500",
              fontFamily: "satoshi",
              borderRadius: "30px",
              background: "var(--tag-bg-color-selected)",
              border: "1px solid var(--tag-bg-color-selected)",
              color: "var(--tag-text-icon-selected)",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              borderColor: "red !important",
              "&:hover fieldset": {
                borderColor: "var(--border-2)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
                border: ".5px solid var(--border-2)",
              },
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            "&.Mui-focused fieldset": {
              borderColor: "white", // Focused state border color
              border: ".5px solid var(--border-2) !important", // Focused state border thickness
            },
            width: "100%", // Full width
            "&:hover fieldset": {
              borderColor: "var(--border-2)", // Hover state border color
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px", // Rounded corners
              borderColor: "green !important", // Default border color
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            width: "100%",
            fontSize: "14px !important",
            // height: "38px",
            borderRadius: "4px",
            "& fieldset": {
              borderColor: "var(--border-2)", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "var(--border-2)", // Hover state border color
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--border-2)", // Focused state border color
              borderWidth: "0.5px", // Custom border width
            },
          },
        },
      },

      MuiRadio: {
        styleOverrides: {
          root: {},
          colorPrimary: {
            "&.Mui-checked": {
              color: "#fdd847",
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            borderBottom: "1px solid var(--border-1)",
            "&:hover": {
              backgroundColor: "var(--surface-l1)", // Hover background color
            },
            "&.Mui-selected": {
              backgroundColor: "var(--surface-l1)", // Selected background color
            },
            "&.Mui-selected:hover": {
              backgroundColor: "var(--surface-l1)", // Selected hove
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            background: "var(--surface-l0)",
            "& .close": {
              padding: "0",
              position: "absolute",

              "& svg": {
                width: "24px",
                height: "24px",
                "& path": {
                  fill: "var(--icon-primary)",
                },
              },
            },
            "& .MuiIconButton-root": {
              top: "12px",
              minWidth: "auto",
              right: "16px",
              position: "absolute",
            },
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            padding: "16px",
            fontFamily: "satoshi",
            color: "var(--text-primary)",
            borderBottom: "1px solid var(--border-1)",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {},
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: "16px",
            borderTop: "1px solid var(--border-1)",
            "& .button_loader": {
              marginLeft: "6px",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: 0,
            color: "#e3e8ef",
            width: "24px",
            height: "24px",
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            border: "1px solid var(--border-1)",
            background: "var(--surface-l1)",
            "&.Mui-expanded": {},
            "&:before": {
              display: "none",
            },
            "&:first-of-type, &:last-of-type": {
              borderRadius: "8px",
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            "&.Mui-expanded": {
              // borderBottom: "0p",
            },
            ".MuiAccordionSummary-content": {},
            "& .MuiAccordionSummary-expandIconWrapper": {},
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            background: "var(--surface-l0)",
            borderRadius: "8px",
            padding: "16px",
            // .MuiDivier
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            color: "var(--surface-l4)", // Thumb color when unchecked
            "&.Mui-checked": {
              color: "var(--green)", // Thumb color when checked
              "& + .MuiSwitch-track": {
                opacity: "1",
                backgroundColor: "#bdbdbd", // Track color when checked
              },
            },
          },
          track: {
            backgroundColor: "#bdbdbd", // Track color when unchecked
            opacity: 1,
          },
        },
      },
    },

    custom: {
      background: "var(--primary-background)",
      border: "var(--border-color)",
    },

    customText: {
      textColor: "var(--primary-background)",
      // backgroundColor:
      background: "#90caf9",
      paragraphColor: "#90caf9",
    },
  };
};

const createAppTheme = (mode) => createTheme(getDesignTokens(mode));

const ThemeModeProvider = ({ children }) => {
  const { mode } = useSelector((state) => state.theme);
  const theme = useMemo(() => createAppTheme(mode), [mode]);
  useEffect(() => {
    document.body.className = mode === "dark" ? "dark-mode" : "light-mode";
  }, [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
ThemeModeProvider.propTypes = {
  children: PropTypes.node,
};
export default ThemeModeProvider;
