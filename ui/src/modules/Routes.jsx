import React from "react";
import { Routes, Route } from "react-router-dom";
import { routeDefinitions } from "../lib/routes";
import { AppLayout } from "../components/AppLayout/appLayout";
import { HomeContainer } from "./home/home.container";
import { SignIn } from "./authorization/signIn";
import { useRequireAuth } from "../hooks";
import { isNil } from "lodash";
import { FineLogs } from "./fine-logs/fineLogs";
import { TeamContainer } from "./team/team.container";
import { ProfileContainer } from "./profile/profile.container";
import TeamManagementContainer from "./team-management/teamManagement.container";

export function AppRoutes() {
  const auth = useRequireAuth();
  return (
    <AppLayout isAuthenticated={!isNil(auth.user)}>
      <Routes>
        <Route exact path="/" element={() => <SignIn />} />
        <Route path={routeDefinitions.login.path} element={<SignIn />} />
        <Route path={routeDefinitions.home.path} element={<HomeContainer />} />
        <Route path={routeDefinitions.logs.path} element={<FineLogs />} />
        <Route path={routeDefinitions.team.path} element={<TeamContainer />} />
        <Route
          path={routeDefinitions.profile.path}
          element={<ProfileContainer />}
        />
        <Route
          path={routeDefinitions.teamManagement.path}
          element={<TeamManagementContainer />}
        />
      </Routes>
    </AppLayout>
  );
}
