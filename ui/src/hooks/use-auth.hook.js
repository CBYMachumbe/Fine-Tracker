import React, { useState, useEffect, useContext, createContext } from "react";
import { serviceNames } from "../lib/service-names";
import { notifyError, notifyInfo } from "../lib/toasts";
import { apiClient } from "./../services/api-client";
const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    return apiClient
      .authenticate({ email, password, strategy: "local" })
      .then((res) => {
        setUser(res.users);
        notifyInfo("Sign in successful", null);
        return res.users;
      })
      .catch((err) => {
        throw err;
      });
  };

  const signUp = (newUser) => {
    return apiClient
      .service(serviceNames.users)
      .create(newUser)
      .then((res) => {
        setUser(res);
        return res;
      })
      .catch((err) => {
        notifyError("Failed to sign your user up", err, false);
      });
  };

  const signOut = () => {
    return apiClient.logout().then(() => {
      setUser(false);
    });
  };

  //   const sendPasswordResetEmail = (email) => {
  //     return firebase
  //       .auth()
  //       .sendPasswordResetEmail(email)
  //       .then(() => {
  //         return true;
  //       });
  //   };

  //   const confirmPasswordReset = (code, password) => {
  //     return firebase
  //       .auth()
  //       .confirmPasswordReset(code, password)
  //       .then(() => {
  //         return true;
  //       });
  //   };

  useEffect(() => {
    return () => {
      const services = Object.values(serviceNames);
      services.forEach((service) => apiClient.off(service)); // removing the channel subscriptions
    };
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signIn,
    signUp,
    signOut,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}
