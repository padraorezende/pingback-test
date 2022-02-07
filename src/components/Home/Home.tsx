
import {
    Button, Grid, Typography
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

export function Home() {
    const history = useHistory();

    return (
        <Grid container>
            <Grid className="main-content">
                <Typography>Welcome</Typography>
                <Typography>This is PingBack Test App Trivia Game</Typography>
                <Typography>You will receive 10 questions can you answer all right? </Typography>
                <Button onClick={()=> history.push('')}>
                    Start
                </Button>
            </Grid>
        </Grid>
    );
}