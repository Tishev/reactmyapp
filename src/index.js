import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Messages from "./components/Messages";
import common, { AUTHOR } from "./constants/common";
import { element } from "prop-types";
import { orange } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  status: {
    danger: orange[500],
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
