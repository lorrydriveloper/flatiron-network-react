import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, withStyles, Grid, Button, Box } from "@material-ui/core";
import Editpersonalinfo from "../helpers/EditPersonalInfo";
import Editsocialmedia from "../helpers/EditSocialMedia";
import EditCompanyInfo from "../helpers/EditCompanyInfo";
import EditLocation from "../helpers/EditLocation";
import EditIcon from "@material-ui/icons/Edit";
import { updateUser } from "../actions/UsersActions";

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
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
  },
  button: {
    background: "#6fbf73",
    marginLeft: 15,
    "&:hover": {
      background: "#357a38",
    },
  },
});

class Profile extends Component {
  state = {
    ...this.props.user,
    ...this.props.user.social,
    ...this.props.user.address,
    ...this.props.user.company,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props
      .updateUser(this.state)
      .then(() => {
        // prompt user with a modal or somethin similar
        console.log(this.props.store);
        alert("user updated");
      })
      .catch((err) => alert(err));
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
        <Box className={classes.box}>
          <Typography className={classes.header} variant="h4">
            Add Your Last updates
          </Typography>
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            startIcon={<EditIcon />}
            onClick={this.handleSubmit}
          >
            Save
          </Button>
        </Box>

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
            <EditLocation {...this.props} {...this.state} />
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
  store: state,
});

export default connect(mapStateToProps, { updateUser })(
  withStyles(styles)(Profile)
);
