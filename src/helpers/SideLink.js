import React from "react";
import { NavLink } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  Icon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textDecoration: "none",
  },
});

export default function Sidelink({ link: { image, text, link }, closeDrawer }) {
  const classes = useStyles();
  return (
    <NavLink to={link} onClick={closeDrawer} className={classes.root}>
      <ListItem button>
        <ListItemIcon>
          <Icon>
            <img src={image} alt={text} height={"24px"} />
          </Icon>
        </ListItemIcon>
        <ListItemText primary={text.toUpperCase()} />
      </ListItem>
    </NavLink>
  );
}
