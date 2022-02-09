import {
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Typography } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "../../redux/questions/actions";
import {
  getQuestionsFromState,
  getSessionTokenFromState,
} from "../../redux/questions/selectors";
import { loadQuestions } from "../api";
import { useStopwatch } from "react-timer-hook";
import { useStyles } from "../../style/global";
import { useHistory } from "react-router-dom";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export const Questions = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState<Array<string>>([]);
  const currentQuestion = useRef(0);
  const token = useSelector(getSessionTokenFromState);
  const questions = useSelector(getQuestionsFromState);
  const handleLoadQuestions = useCallback(async () => {
    if (!token) {
      return;
    }
    try {
      const resp = await loadQuestions(token);
      console.log(resp.data);
      dispatch(setQuestions(resp.data.results));
    } catch (error: any) {
      console.log(error.message);
    }
  }, [dispatch, token]);

  const handleUseResp = (value: string) => {
    currentQuestion.current += 1;
    setAnswers((prev) => [...prev, value]);
    if (currentQuestion.current == 10) {
      console.log(currentQuestion.current);
      pause();
    }
  };

  const { seconds, minutes, pause } = useStopwatch({ autoStart: true });

  const isAllQuestionsAnswered = questions.length === currentQuestion.current;

  const amountOfCorrectAnsweres = answers.reduce((acc, curr, index) => {
    if (questions[index].correct_answer === curr) {
      return acc + 1;
    }
    return acc;
  }, 0);

  useEffect(() => {
    handleLoadQuestions();
  }, [handleLoadQuestions]);
  return (
    <>
      {questions.length > 0 && !isAllQuestionsAnswered && (
        <Grid container justifyContent="center" className={classes.container}>
          <Grid>
            <Typography gutterBottom variant="h4">{`Question ${
              currentQuestion.current + 1
            } of 10`}</Typography>
            <Typography gutterBottom className={classes.marginBottom20}>
              {questions[currentQuestion.current].category}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.marginBottom20}
            >
              {questions[currentQuestion.current].question}
            </Typography>
            <Grid className={classes.buttonContainer}>
              <Button
                onClick={() => handleUseResp("True")}
                type="button"
                variant="contained"
                color="primary"
                className={`${classes.button} ${classes.marginRight10}`}
              >
                True
              </Button>
              <Button
                onClick={() => handleUseResp("False")}
                type="button"
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                False
              </Button>
            </Grid>
            <Typography>{`Time: ${minutes}m:${seconds}s`}</Typography>
          </Grid>
        </Grid>
      )}

      {isAllQuestionsAnswered && (
        <Grid className={classes.container}>
          <Typography variant="h5">Result</Typography>
          <List dense disablePadding>
            {answers.map((value, index) => (
              <ListItem  disableGutters key={index}>
                {value === questions[index].correct_answer ? (
                  <IconButton>
                    <CheckBoxIcon className={classes.greenIcon} />
                  </IconButton>
                ) : (
                  <IconButton>
                    <HighlightOffIcon color="secondary" />
                  </IconButton>
                )}

                <ListItemText primary={questions[index].question} />
              </ListItem>
            ))}
          </List>
          <Typography textAlign="inherit" gutterBottom>{`Time: ${minutes}m:${seconds}s`}</Typography>
          <Typography textAlign="inherit" gutterBottom>{`You Scored ${amountOfCorrectAnsweres}/10`}</Typography>
          <Button
            onClick={() => history.push("/")}
            type="button"
            variant="contained"
            color="default"
            className={classes.button}
          >
            Play Again
          </Button>
        </Grid>
      )}
    </>
  );
};
