import React from "react";
import {
  Paper,
  Typography,
  GridList,
  Link,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "60%",
    padding: theme.spacing(3),
    textAlign: "center",
    overflowY: "hidden",
  },
  headerWeather: {
    fontWeight: 600,
  },
  gridList: {
    height: 340,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    minHeight: 110,
  },
}));

export default function DevSection({ articles: { array, loading } }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={12}>
      {loading ? null : (
        <>
          <Typography className={classes.headerWeather} variant="h5">
            Articles may Worth Read
          </Typography>
          <GridList cellHeight={120} className={classes.gridList}>
            {array.map((article) => (
              <Link
                href={article.canonical_url}
                target="_blank"
                rel="noopener"
                key={article.id}
              >
                <GridListTile>
                  <img
                    width="100%"
                    src={article.cover_image}
                    alt={article.article}
                    className={classes.image}
                  />
                  <GridListTileBar
                    title={article.title}
                    subtitle={<span>by: {article.user.name}</span>}
                  />
                </GridListTile>
              </Link>
            ))}
          </GridList>
        </>
      )}
    </Paper>
  );
}
