
import { createTheme, type PaletteMode } from "@mui/material/styles";
import {
  colorTokens,
  typographyTokens,
} from "./tokens";

export const createAppTheme = (mode: PaletteMode) => {
  const colors = colorTokens[mode];

  return createTheme({
    palette: {
      mode,

      primary: {
        main: colors.primary,
        contrastText: mode === "light" ? "#FFFFFF" : "#0F172A",
      },

      secondary: {
        main: colors.secondary,
      },

      background: {
        default: colors.background,
        paper: colors.surface,
      },

      text: {
        primary: colors.text,
        secondary: colors.textSecondary,
      },

      divider: colors.border,

      success: {
        main: colors.success,
      },

      warning: {
        main: colors.warning,
      },

      error: {
        main: colors.error,
      },

      info: {
        main: colors.info,
      },
    },

    typography: {
      fontFamily: typographyTokens.fontFamily,
      fontSize: 14,

      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },

      h2: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: 1.25,
      },

      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },

      h4: {
        fontSize: "1.25rem",
        fontWeight: 600,
      },

      h5: {
        fontSize: "1.125rem",
        fontWeight: 600,
      },

      h6: {
        fontSize: "1rem",
        fontWeight: 600,
      },

      body1: {
        fontSize: "1rem",
        lineHeight: 1.6,
      },

      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.6,
      },

      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },

    shape: {
      borderRadius: 8,
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.background,
            color: colors.text,
          },

          "*": {
            boxSizing: "border-box",
          },
        },
      },

      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },

        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: "8px 18px",
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundImage: "none",
            border: `1px solid ${colors.border}`,
          },
        },
      },

      MuiTextField: {
        defaultProps: {
          size: "small",
          fullWidth: true,
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });
};
