import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import Container from "./components/Container";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1280,
    },
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
