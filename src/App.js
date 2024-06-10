import "./App.css";
import { useEffect } from "react";
import SiteHeader from "./SiteHeader/SiteHeader";
import SiteFooter from "./SiteFooter/SiteFooter";
import Body from "./Body/Body";
import { ThemeProvider } from "@emotion/react";
import ContextProvider from "./Context/Provider";
import { createTheme } from "@mui/material";

function App() {
  useEffect(() => {
    document.title = "Starr Ghostwriting Services";
  }, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#ce93d8",
      },
      background: {
        default: "#121212",
        paper: "#121212",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <SiteHeader />
          <Body />
          <SiteFooter />
        </ContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
