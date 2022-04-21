import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, VideoProvider, AuthProvider } from "../context/index";
import { PlaylistProvider } from "../context/playlist-context";

const CombinedProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <VideoProvider>
            <PlaylistProvider> {children}</PlaylistProvider>
          </VideoProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { CombinedProvider };
