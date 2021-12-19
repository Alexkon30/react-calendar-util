import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./App.jsx";
import "./index.css";

import { TableProvider } from './TableContext'

ReactDOM.render(
  <StrictMode>
    <TableProvider>
      <App />
    </TableProvider>
  </StrictMode>,
  document.getElementById("root")
);
