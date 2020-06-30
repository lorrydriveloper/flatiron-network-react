import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    height: 475,
    boxShadow: `4px 5px 15px #00000040,0px 4px 4px #00000040;`,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: {
    height: 200,
    overflowY: "auto",
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function MeetupCard({
  title,
  location,
  organizerPhoto,
  eventPhoto,
  description,
  eventLink,
}) {
  const classes = useStyles();

  return (
    <Link
      href={eventLink}
      target="_blank"
      rel="noopener"
      className={classes.link}
    >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              src={organizerPhoto}
              aria-label="organizer"
              className={classes.avatar}
              alt="organizer"
            />
          }
          title={title}
          subheader={location}
        />
        <CardMedia className={classes.media} image={eventPhoto} title={title} />
        <CardContent
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: description }}
        ></CardContent>
      </Card>
    </Link>
  );
}
