import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CombinedProvider } from "./frontend/Provider/CombinedProvider";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CombinedProvider>
      <App />
    </CombinedProvider>
  </React.StrictMode>,
  document.getElementById("root")
);