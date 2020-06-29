import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  makeStyles,
  Typography,
  CardActions,
  CardContent,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import defaultAvatar from "../assets/images/avatar.svg";
import SocialButton from "../helpers/SocialButton";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles({
  root: {
    position: "relative",
    background: "#f5f",
    height: 325,
    width: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: `4px 5px 15px #00000040,0px 4px 4px #00000040;`,
  },
  header: {
    width: "100%",
  },

  avatar: {
    width: 60,
    height: 60,
  },
  text: {
    fontWeight: 700,
    textShadow: `0px 4px 4px #00000040,0px 4px 4px #00000040,0px 4px 4px #00000040`,
  },
  social: {
    maxWidth: "100%",
    position: "absolute",
    bottom: 0,
  },
  content: {
    padding: 0,
  },
  list: {
    maxHeight: 150,
    width: 300,
    padding: 0,
  },
});

export default function UserCard(props) {
  const classes = useStyles();
  const {
    id,
    name,
    surname,
    avatar,
    social,
    company,
    cohort: {
      course: { title },
      campus,
    },
  } = props;

  return (
    <Card className={classes.root} id={id}>
      <CardHeader
        avatar={
          <Avatar
            className={classes.avatar}
            alt={name}
            src={avatar || defaultAvatar}
          />
        }
        title={
          <Typography className={classes.text} variant="h4">
            {name}
          </Typography>
        }
        subheader={
          <Typography className={classes.text} variant="h5">
            {surname}
          </Typography>
        }
        className={classes.header}
      />
      <CardContent className={classes.content}>
        <List className={classes.list}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationCityIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={campus.name} />
          </ListItem>
          <ListItem divider={true}>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={company} />
          </ListItem>
        </List>
      </CardContent>
      <CardActions disableSpacing className={classes.social}>
        {Object.keys(social).map((item) => {
          if (social[item]) {
            return <SocialButton socialMedia={item} url={social[item]} />;
          }
          return null;
        })}
      </CardActions>
    </Card>
  );
}
