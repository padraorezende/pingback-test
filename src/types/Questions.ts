export type QuestionsResult ={
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
}


export type Questions = {
    response_code?: number,
    results?: QuestionsResult[]
}

