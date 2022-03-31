import "react-toastify/dist/ReactToastify.min.css";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { FineTrackerAppBar } from "./appBar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Menu } from "./menu";
import { Container } from "@mui/material";
import { Copyright } from "../Copyright/copy-right";
import { ToastContainer } from "react-toastify";
import { ColorModeContextProvider } from "../../context/color-mode-context";
import { useRouter } from "../../hooks";
import { routeDefinitions } from "../../lib/routes";

export function AppLayout({ children, isAuthenticated }) {
  const { navigate } = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routeDefinitions.login.pathWithoutParams);
    }
  }, [isAuthenticated, navigate]);

  return (
    <ColorModeContextProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <FineTrackerAppBar isAuthenticated={isAuthenticated} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
            <Grid container spacing={3}>
              {!isAuthenticated ? (
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <ToastContainer theme="colored" />
                    {children}
                  </Paper>
                </Grid>
              ) : (
                <>
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <ToastContainer theme="colored" />
                      {children}
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Menu />
                      <Copyright sx={{ pt: 4 }} />
                    </Paper>
                  </Grid>
                </>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ColorModeContextProvider>
  );
}

AppLayout.propTypes = {
  content: PropTypes.node,
};
