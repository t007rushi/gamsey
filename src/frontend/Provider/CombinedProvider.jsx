import React from "react";
import { ThemeProvider, VideoProvider } from "../context/index";

const CombinedProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <VideoProvider>{children}</VideoProvider>
    </ThemeProvider>
  );
};

export { CombinedProvider };
