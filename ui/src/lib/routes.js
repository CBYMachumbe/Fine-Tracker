export const routeDefinitions = {
  feed: {
    name: "feed",
    path: "feed/:teamId",
    pathWithoutParams: "feed",
  },
  logs: {
    name: "fine logs",
    path: "fine-logs/:teamId",
    pathWithoutParams: "/fine-logs",
  },
  profile: {
    name: "profile",
    path: "profile/:userId",
    pathWithoutParams: "/profile",
  },
  team: {
    name: "team",
    path: "team/:teamId",
    pathWithoutParams: "/team",
  },
  login: {
    name: "login",
    path: "login",
    pathWithoutParams: "/login",
  },
  home: {
    name: "home",
    path: "/home",
    pathWithoutParams: "/home",
  },
  teamManagement: {
    name: "team management",
    path: "teamManagement/:teamId",
    pathWithoutParams: "/teamManagement",
  },
};
