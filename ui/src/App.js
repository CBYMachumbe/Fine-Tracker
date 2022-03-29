import React from "react";
import { ProvideAuth } from "./hooks/use-auth.hook";
import { AppRoutes } from "./modules/Routes";

function App() {
  return (
    <ProvideAuth>
      <AppRoutes />
    </ProvideAuth>
  );
}

export default App;
