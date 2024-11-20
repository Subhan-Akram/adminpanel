import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store";
import { ThemeModeProvider } from "./themeReducer";
import React from "react";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </Provider>
  </React.StrictMode>
);
