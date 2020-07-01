import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, withStyles, Grid, Paper, Button } from "@material-ui/core";
import Editpersonalinfo from "../helpers/EditPersonalInfo";
import Editsocialmedia from "../helpers/EditSocialMedia";
import EditCompanyInfo from "../helpers/EditCompanyInfo";

const styles = (theme) => ({
  header: {
    paddingBottom: 10,
    textAlign: "center",
    fontWeight: 700,
  },
  paper: {
    height: "100%",
    padding: theme.spacing(2),
    textAlign: "center",
    overflowY: "hidden",
  },
});

class Profile extends Component {
  state = {
    ...this.props.user,
    ...this.props.user.social,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography className={classes.header} variant="h4">
          Add Your Last updates
          <Button> UPDATE</Button>
        </Typography>

        <Grid
          container
          className={classes.root}
          spacing={2}
          onChange={this.handleChange}
        >
          <Grid item md={6} xs={12}>
            <Editsocialmedia {...this.props} {...this.state} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Editpersonalinfo {...this.props} {...this.state} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.paper} elevation={12}></Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <EditCompanyInfo {...this.props} {...this.state} />
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
});

export default connect(mapStateToProps, {})(withStyles(styles)(Profile));
