import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import Collapse from "@mui/material/Collapse";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import ViewListIcon from "@mui/icons-material/ViewList";
import HomeIcon from "@mui/icons-material/Home";
// import ExpandLess from "@mui/icons-material/ExpandLess";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";
import { routeDefinitions } from "../../lib/routes";
import { useAuth, useRouter } from "../../hooks";

export function Menu() {
  // const [open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(routeDefinitions.home.name);

  const { navigate } = useRouter();
  const { user } = useAuth();
  const { _id: userId, team } = user;

  const onMenuItemClick = (name) => {
    setActiveItem(name);
    switch (name) {
      case routeDefinitions.home.name:
        navigate(`${routeDefinitions.home.pathWithoutParams}`);
        break;
      case routeDefinitions.feed.name:
        navigate(`${routeDefinitions.feed.pathWithoutParams}/${team}`);
        break;
      case routeDefinitions.profile.name:
        navigate(`${routeDefinitions.profile.pathWithoutParams}/${userId}`);
        break;
      case routeDefinitions.logs.name:
        navigate(`${routeDefinitions.logs.pathWithoutParams}/${team}`);
        break;
      case routeDefinitions.team.name:
        navigate(`${routeDefinitions.team.pathWithoutParams}/${team}`);
        break;
      case routeDefinitions.teamManagement.name:
        navigate(
          `${routeDefinitions.teamManagement.pathWithoutParams}/${team}`
        );
        break;
      default:
        break;
    }
  };

  const isActive = (name) => {
    return name === activeItem;
  };

  return (
    <List
      sx={{ width: "100%" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
    >
      <ListItemButton
        onClick={() => onMenuItemClick(routeDefinitions.home.name)}
      >
        <ListItemIcon>
          <HomeIcon
            color={isActive(routeDefinitions.home.name) ? "primary" : ""}
          />
        </ListItemIcon>
        <ListItemText primary={`${routeDefinitions.home.name}`} />
      </ListItemButton>

      <ListItemButton
        onClick={() => onMenuItemClick(routeDefinitions.logs.name)}
      >
        <ListItemIcon>
          <ViewListIcon
            color={isActive(routeDefinitions.logs.name) ? "primary" : ""}
          />
        </ListItemIcon>
        <ListItemText primary={`${routeDefinitions.logs.name}`} />
      </ListItemButton>

      <ListItemButton
        onClick={() => onMenuItemClick(routeDefinitions.team.name)}
      >
        <ListItemIcon>
          <GroupsIcon
            color={isActive(routeDefinitions.team.name) ? "primary" : ""}
          />
        </ListItemIcon>
        <ListItemText primary={`${routeDefinitions.team.name}`} />
      </ListItemButton>

      <ListItemButton
        onClick={() => onMenuItemClick(routeDefinitions.teamManagement.name)}
      >
        <ListItemIcon>
          <ManageAccountsIcon
            color={
              isActive(routeDefinitions.teamManagement.name) ? "primary" : ""
            }
          />
        </ListItemIcon>
        <ListItemText primary={`${routeDefinitions.teamManagement.name}`} />
      </ListItemButton>

      <ListItemButton
        onClick={() => onMenuItemClick(routeDefinitions.profile.name)}
      >
        <ListItemIcon>
          <AccountIcon
            color={isActive(routeDefinitions.profile.name) ? "primary" : ""}
          />
        </ListItemIcon>
        <ListItemText primary={`${routeDefinitions.profile.name}`} />
      </ListItemButton>

      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
  );
}
