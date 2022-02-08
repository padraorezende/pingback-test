import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { QuestionsResult } from "../../types/Questions";

export const Questions = (props: any) => {
    const history = useHistory();
    let activeIndex = props.store.activeIndex;
    let questionCount = props.store.questions.length
    let activeQuestion = props.store.questions[activeIndex];

    return (
        <>

            {activeIndex < questionCount && (
                <>
                    <Typography>{`Question ${activeQuestion.id} of 10`}</Typography>
                    <Typography>{activeQuestion.category}</Typography>
                    <Typography>{activeQuestion.question}</Typography>
                    <Button
                        onClick={() => props.onAnswerClick(activeQuestion.id, true)}
                        type="button"
                        variant="contained"
                        color="primary">
                        True
                    </Button>
                    <Button
                        onClick={() => props.onAnswerClick(activeQuestion.id, true)}
                        type="button"
                        variant="contained"
                        color="secondary">False</Button>
                </>
            )}

            {!(activeIndex < questionCount) && (
                <>
                    <Typography>Result</Typography>
                    <List> 
                        {props.store.questions.map((item: QuestionsResult, index: number) => <ListItem key={index}>

                            {/* <ListItemSecondaryAction>
                                {item.correct_answer === item.user_answer ?
                                    <IconButton ><CheckBoxIcon /></IconButton> :
                                    <IconButton><HighlightOffIcon /></IconButton>
                                }

                            </ListItemSecondaryAction> */}

                            <ListItemText primary={item.question} />
                        </ListItem>
                        )}
                    </List>
                    <Typography>{`You Scored 4/10`}</Typography>
                    <Button
                        onClick={() => history.push("/")}
                        type="button"
                        variant="contained"
                        color="secondary">Play Again</Button>

                </>
            )}

        </>
    );
}