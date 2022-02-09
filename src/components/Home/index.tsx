import { Button, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../style/global";

export function Home() {
  const history = useHistory();
  const classes = useStyles();

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
          className={`${classes.marginBottom20} ${classes.marginTop20}`}
        >
          Welcome
        </Typography>
        <Typography gutterBottom className={classes.marginBottom20}>
          This is PingBack Test App Trivia Game
        </Typography>
        <Typography gutterBottom className={classes.marginBottom20}>
          You will receive 10 questions can you answer all right?{" "}
        </Typography>
        <Button
          onClick={() => history.push("/questions")}
          type="button"
          variant="contained"
          color="secondary"
          fullWidth
        >
          Start
        </Button>
      </Grid>
    </Grid>
  );
}
