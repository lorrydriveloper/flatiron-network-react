import React from "react";
import { NavLink } from "react-router-dom";
import { ListItem, ListItemIcon, Icon, ListItemText } from "@material-ui/core";

export default function Sidelink({ image, text, link }) {
  return (
    <NavLink to={link}>
      <ListItem button>
        <ListItemIcon>
          <Icon>
            <img src={image} alt={text} />
          </Icon>
        </ListItemIcon>
        <ListItemText primary={text.toUpperCase()} />
      </ListItem>
    </NavLink>
  );
}
