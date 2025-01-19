import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./routes/layout.tsx";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./components/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
