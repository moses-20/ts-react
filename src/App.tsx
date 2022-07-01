import { ThemeProvider } from "@mui/material";
import Layout from "layout";
import theme from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
