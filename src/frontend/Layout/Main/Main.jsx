import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import {
  Explore,
  History,
  HomePage,
  Liked,
  LoginPage,
  PlayList,
  PlaylistVideos,
  SignupPage,
  SingleVideo,
} from "../../pages/index";
import { WatchLater } from "../../pages/WatchLater/WatchLater";
import RequireAuth from "../../router/RequireAuth";

export const Main = () => {
  const {
    user: { isUserLoggedIn },
  } = useAuth();
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {!isUserLoggedIn && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
        )}

        <Route
          path="/playlist"
          element={
            <RequireAuth>
              <PlayList />
            </RequireAuth>
          }
        />
        <Route
          path="/playlist/:playlistID"
          element={
            <RequireAuth>
              <PlaylistVideos />
            </RequireAuth>
          }
        />

        <Route
          path="/liked"
          element={
            <RequireAuth>
              <Liked />
            </RequireAuth>
          }
        />

        <Route
          path="/watchlater"
          element={
            <RequireAuth>
              <WatchLater />
            </RequireAuth>
          }
        />

        <Route
          path="/history"
          element={
            <RequireAuth>
              <History />
            </RequireAuth>
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:singleVid" element={<SingleVideo />} />
      </Routes>
    </div>
  );
};
