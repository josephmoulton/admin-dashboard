import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/Topbar"

function App() {
  const [theme, colorMode] = useMode();

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar></Topbar>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
