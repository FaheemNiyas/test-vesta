import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import { ToastProvider } from "./providers/ToastProvider";
import { ContextProvider } from "./components/hoc/wagmi/wagmiProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ContextProvider>
  </React.StrictMode>
);
