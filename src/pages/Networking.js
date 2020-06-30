import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles, Typography } from "@material-ui/core";
import { FakeApiCall } from "../helpers/FakeAPICall";
import MeetupCard from "../components/MeetupCard.js";

const styles = () => ({
  root: {
    background: "red",
    height: "100%",
    overflow: "auto",
  },
  header: {
    paddingBottom: 10,
    textAlign: "center",
  },
});

class Networking extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography className={classes.header} variant="h4">
          Good Place to Networking
        </Typography>
        <Grid container className={classes.root} spacing={2}>
          {FakeApiCall.map((meetup) => {
            return (
              <Grid key={meetup.id} item xs={12} sm={6} md={4}>
                <MeetupCard
                  title={meetup.name}
                  location={meetup.localized_location}
                  organizerPhoto={meetup.organizer.photo.thumb_link}
                  eventPhoto={cleanPhoto(meetup)}
                  description={meetup.description}
                  eventLink={meetup.link}
                />
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Networking);

function cleanPhoto(meetup) {
  if (meetup.key_photo) {
    return meetup.key_photo.photo_link;
  } else {
    return "https://secure.meetupstatic.com/photos/event/2/e/a/d/600_450131949.jpeg";
  }
}
