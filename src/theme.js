import { createTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00397A",
      light: "#0053B2",
      dark: "#00254F",
    },
    secondary: {
      main: "#CFF0F9",
      dark: "#A4D6EC",
      light: "#EFFAFD",
    },
    error: {
      main: "#DA3448",
    },
    success: {
      main: "#34A853",
    },
    warning: {
      main: "#F4B740",
    },
    info: {
      main: "#3872E0",
    },
  },
  typography: {
    h1: {
      fontSize: 64,
      fontWeight: 700,
    },
    h2: {
      fontSize: 56,
      fontWeight: 700,
    },
    h3: {
      fontSize: 48,
      fontWeight: 700,
    },
    h4: {
      fontSize: 34,
      fontWeight: 700,
    },
    h5: {
      fontSize: 24,
      fontWeight: 700,
    },
    h6: {
      fontSize: 19,
      fontWeight: 700,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 16,
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: 16,
      color: "#8F909D",
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
      color: "#8F909D",
    },
    fontFamily: "Sofia Pro, Poppins",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          boxShadow: "unset",
          padding: "16px 24px",
          textTransform: "unset",
          lineHeight: "unset",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: "white",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: KeyboardArrowDownIcon,
        MenuProps: {
          PaperProps: {
            sx: {
              borderRadius: "16px",
              boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
            },
          },
          MenuListProps: {
            sx: {
              parent: {
                backgroundColor: "red",
              },
            },
          },
        },
      },
    },
  },

  shape: {
    borderRadius: 20,
  },
});
