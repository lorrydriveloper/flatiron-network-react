import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { connect } from "react-redux";
import { logout } from "../actions/Auth";
import HomeIcon from "../assets/images/home.svg";
import GlobeIcon from "../assets/images/globe.svg";
import NetworkIcon from "../assets/images/network.svg";
import ProfileIcon from "../assets/images/profile.svg";
import { Switch } from "react-router-dom";
import GoogleMap from "../pages/GoogleMap";
import Home from "../pages/Home";
import Networking from "../pages/Networking";
import Profile from "../pages/Profile";
import Protectedroute from "../helpers/ProtectedRoute";
import Sidelink from "../helpers/SideLink";

const links = [
  { image: HomeIcon, text: "home", link: "/" },
  { image: GlobeIcon, text: "find collegues", link: "/map" },
  { image: NetworkIcon, text: "networking", link: "/networking" },
  { image: ProfileIcon, text: "profiles", link: "/profile" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },

  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    // "background-color": "red",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: "80vh",
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("state");
    localStorage.removeItem("token");
    props.logout();
    console.log(localStorage);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Flatiron Network
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            LogOut
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open}>
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {links.map((link) => (
            <Sidelink key={link.text} {...link} />
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Switch>
                  <Protectedroute path="/Map" component={GoogleMap} />
                  <Protectedroute path="/Networking" component={Networking} />
                  <Protectedroute path="/Profile" component={Profile} />
                  <Protectedroute exact path="/" component={Home} />
                </Switch>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default connect(null, { logout })(Dashboard);
