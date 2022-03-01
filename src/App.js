import { ThemeProvider } from "@mui/material";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage></LandingPage>
    </ThemeProvider>
  );
}

export default App;
