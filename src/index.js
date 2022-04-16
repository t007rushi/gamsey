import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CombinedProvider } from "./frontend/Provider/CombinedProvider";
import { makeServer } from "./server";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CombinedProvider>
      <App />
    </CombinedProvider>
  </React.StrictMode>
);
