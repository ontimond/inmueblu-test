import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import SearchPage from "./pages/SearchPage";

const theme = createTheme({
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
    fontFamily: [
      "Sofia Pro",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
  },
  overrides: {
    MuiButton: {},
  },
  shape: {
    borderRadius: 15,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchPage></SearchPage>
    </ThemeProvider>
  );
}

export default App;
