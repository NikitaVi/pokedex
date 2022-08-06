import React from "react";
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle, theme, ThemeProvider} from "./styled-components";
import {Header} from "./components/entities/header";
import RootPage from "./root/page";
import {Provider} from "react-redux";
import {store} from "./store/core";

const App = () => {
  const basePath = "/";

  return (
    <React.StrictMode>
      <BrowserRouter basename={basePath}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Header/>
            <RootPage/>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;