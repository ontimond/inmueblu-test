import { ThemeProvider } from "@mui/material";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchPage></SearchPage>
    </ThemeProvider>
  );
}

export default App;
