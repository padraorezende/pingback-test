import { Button, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { QuestionsResult } from "../../types/Questions";

export type QuestionsPageProps = {
    questions: QuestionsResult[] | undefined;
}

export const QuestionsPage = (props: QuestionsPageProps) => {
    return (
        <>
            {props.questions?.map(result => <ListItem key={result.question}>
                <ListItemText primary={result.category} secondary={result.question} />
                <Button type="button"
                    variant="contained"
                    color="primary">
                    True
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    color="secondary">False</Button>
            </ListItem>)}
        </>
    );
}