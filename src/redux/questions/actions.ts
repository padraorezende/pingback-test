import { QuestionsResult } from "../../types/Questions";
import { GENERATE_SESSION_TOKEN, LOAD_QUESTIONS } from "./types";

export const setToken = (token: string) => {
  return {
    type: GENERATE_SESSION_TOKEN,
    payload: {
      token,
    },
  };
};

export const setQuestions = (questions: Array<QuestionsResult>) => {
  return {
    type: LOAD_QUESTIONS,
    payload: {
      questions,
    },
  };
};
