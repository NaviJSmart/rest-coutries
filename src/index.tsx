import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import ThemeContextProvider from "./context/ThemeContext";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
