// Hook (use-require-auth.js)
import { useEffect } from "react";
import { routeDefinitions } from "../lib/routes";
import { useAuth } from "./use-auth.hook";
import { useRouter } from "./use-router.hook";

export function useRequireAuth(redirectUrl = routeDefinitions.login.path) {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.user === false) {
      router.navigate(redirectUrl);
    }
  }, [auth, router, redirectUrl]);

  return auth;
}
