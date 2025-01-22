import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import ThemeModeProvider from "./themeReducer/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </Provider>
  </React.StrictMode>,
);
