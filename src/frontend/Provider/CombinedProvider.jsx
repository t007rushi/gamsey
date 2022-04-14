import React from "react";
import { ThemeProvider, VideoProvider, AuthProvider } from "../context/index";

const CombinedProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <VideoProvider>{children}</VideoProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export { CombinedProvider };
