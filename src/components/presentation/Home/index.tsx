import { Button, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setToken } from "../../../redux/questions/actions";
import { getSessionTokenFromState } from "../../../redux/questions/selectors";
import { generateSessionToken } from "./api";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  content: {
    margin: theme.spacing(3),
  },
}));

export function Home() {
  const dispatch = useDispatch();
  const token = useSelector(getSessionTokenFromState);
  const classes = useStyles();

  const handleGenerateToken = useCallback(async () => {
    try {
      const resp = await generateSessionToken();
      const { token } = resp.data;
      dispatch(setToken(token));
    } catch (error: any) {
      console.log(error.message);
    }
  }, [dispatch]);

  console.log(token)
  useEffect(() => {
    handleGenerateToken();
  }, [handleGenerateToken]);

  return (
    <Grid container justifyContent="center" className={classes.container}>
      <Grid>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Szp5Kp6fj7ZgugTcIAKRl2J01Q2h24c8AQ&s"
          alt="PingBack Test App"
        />
        <Typography
          gutterBottom
          variant="subtitle1"
          className={classes.content}
        >
          Welcome
        </Typography>
        <Typography gutterBottom className={classes.content}>
          This is PingBack Test App Trivia Game
        </Typography>
        <Typography gutterBottom className={classes.content}>
          You will receive 10 questions can you answer all right?{" "}
        </Typography>
      </Grid>
    </Grid>
  );
}
