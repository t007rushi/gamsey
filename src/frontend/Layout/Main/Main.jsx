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
} from "../../pages/index";
import { WatchLater } from "../../pages/WatchLater/WatchLater";
import ProtectedRoute from "../../router/ProtectedRoutes";

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
            <ProtectedRoute ProtectedComp={<PlayList />}></ProtectedRoute>
          }
        />
        <Route
          path="/playlist/:playlistID"
          element={
            <ProtectedRoute ProtectedComp={<PlaylistVideos />}></ProtectedRoute>
          }
        />

        <Route
          path="/liked"
          element={<ProtectedRoute ProtectedComp={<Liked />}></ProtectedRoute>}
        />

        <Route
          path="/watchlater"
          element={
            <ProtectedRoute ProtectedComp={<WatchLater />}></ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute ProtectedComp={<History />}></ProtectedRoute>
          }
        />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
};
