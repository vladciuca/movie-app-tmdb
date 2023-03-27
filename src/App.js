import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Navigation, Search } from "components";
import { Home } from "pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Search />
      <Navigation />
      <Home />
    </ThemeProvider>
  );
}

export default App;
