import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  ThemeProvider,
  VideoProvider,
  AuthProvider,
  PlaylistProvider,
  WatchlaterProvider,
  LikeProvider,
} from "../context/index";

const CombinedProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <VideoProvider>
            <PlaylistProvider>
              <WatchlaterProvider>
                <LikeProvider>{children}</LikeProvider>
              </WatchlaterProvider>
            </PlaylistProvider>
          </VideoProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { CombinedProvider };
