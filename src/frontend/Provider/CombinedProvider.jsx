import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, VideoProvider, AuthProvider } from "../context/index";

const CombinedProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <VideoProvider>{children}</VideoProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { CombinedProvider };
