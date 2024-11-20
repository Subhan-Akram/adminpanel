import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
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
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              border: "1px solid var(--border-2)",
              "&:hover fieldset": {
                border: "1px solid var(--border-2)",
              },
              "&.Mui-focused fieldset": {
                border: "1px solid var(--border-2)",
              },
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
