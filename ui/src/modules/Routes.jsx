import React from "react";
import { Routes, Route } from "react-router-dom";
import { routeDefinitions } from "../lib/routes";
import { AppLayout } from "../components/AppLayout/appLayout";
import { FineFeed } from "./fine-feed/fine-feed";
import { SignIn } from "./sign-up-in/sign-in";
import { useRequireAuth } from "../hooks";
import { isNil } from "lodash";

export function AppRoutes() {
  const auth = useRequireAuth();
  return (
    <AppLayout isAuthenticated={!isNil(auth.user)}>
      <Routes>
        <Route exact path="/" element={() => <SignIn />} />
        <Route path={routeDefinitions.login.path} element={<SignIn />} />
        <Route path={routeDefinitions.feed.path} element={<FineFeed />} />
      </Routes>
    </AppLayout>
  );
}
