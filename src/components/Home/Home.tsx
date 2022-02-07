
import {
    Button, Grid, makeStyles, Theme, Typography
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        marginTop: theme.spacing(3),
        textAlign: "center"
    },
    content: {
        margin: theme.spacing(3)
    }
}))

export function Home() {
    const history = useHistory();
    const classes = useStyles();

    return (
        <Grid container justifyContent="center" className={classes.container}>
            <Grid>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Szp5Kp6fj7ZgugTcIAKRl2J01Q2h24c8AQ&s" alt="PingBack Test App" />
                <Typography gutterBottom variant="subtitle1" className={classes.content}>Welcome</Typography>
                <Typography gutterBottom className={classes.content}>This is PingBack Test App Trivia Game</Typography>
                <Typography gutterBottom className={classes.content}>You will receive 10 questions can you answer all right? </Typography>
                <Button onClick={() => history.push('/questions')} fullWidth color="secondary" variant="contained">
                    Start
                </Button>
            </Grid>
        </Grid>
    );
}