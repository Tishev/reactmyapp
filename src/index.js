import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store";
import persistor from "./store";
import { orange } from "@mui/material/colors";
import { ThemeProvider, createTheme, CircularProgress } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#023f7c",
      neMain: "#000000",
    },
  },
  status: {
    danger: orange[500],
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
