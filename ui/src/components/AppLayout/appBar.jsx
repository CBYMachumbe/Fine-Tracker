import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ColorModeContext } from "../../context/color-mode-context";
import { Tooltip, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
export function FineTrackerAppBar({ isAuthenticated }) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <MuiAppBar position="absolute">
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          FineTracker
        </Typography>
        {isAuthenticated && (
          <>
            <IconButton color="inherit">
              <Badge showZero badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Tooltip title="sign out">
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </>
        )}
        <Tooltip
          title={`switch to ${
            theme.palette.mode === "dark" ? "light" : "dark"
          } mode`}
        >
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </MuiAppBar>
  );
}
