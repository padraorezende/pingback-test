import { useEffect, useState } from "react";
import { searchQuestions } from "../../api/api";
import { QuestionsResult } from "../../types/Questions";
import { QuestionsPage } from "./Questions";


export const QuestionsPageContainer = () => {

    const [questions, setQuestions] = useState<QuestionsResult[] | undefined>([]);

    const buscarDados = async () => {
        const data = (await searchQuestions()).results?.map((result) => ({
            category: result.category,
            type: result.type,
            difficulty: result.difficulty,
            question: result.question,
            correct_answer: result.correct_answer,
        } as QuestionsResult))

        setQuestions(data)
    }

    useEffect(() => {
        buscarDados();
    }, [])

    return (
        <QuestionsPage
            questions={questions}
        />
    );

} 