import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "src/pages";
import { ThemeProvider } from "styled-components";
import ErrorMessage from "./components/ErrorMessage";
import { AppWrapper, GlobalStyle } from "./styles";
import { color } from "./utils/pallete";
import { ROUTES_MAP } from "./utils/routes";

function App() {
  return (
    <ThemeProvider theme={{ color }}>
      <GlobalStyle />
      <AppWrapper>
        <ErrorMessage />
        <BrowserRouter>
          <Routes>
            {ROUTES_MAP.map(({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ))}

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
