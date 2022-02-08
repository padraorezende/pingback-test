export type QuestionsResult ={
    id: number,
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: boolean,
    incorrect_answers: string[],
}


export type Questions = {
    response_code?: number,
    results?: QuestionsResult[]
}

