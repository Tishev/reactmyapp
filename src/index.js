import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import common, { AUTHOR } from "./constants/common";
import { element } from "prop-types";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

