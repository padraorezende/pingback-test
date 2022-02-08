import { QuestionsResult } from "../../types/Questions";
import * as questionTypes from "./types";

export type QuestionState = {
  token: string,
  questions: Array<QuestionsResult>
}

const intialState : QuestionState = {
  token: "",
  questions: [],
};

export const questionReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case questionTypes.GENERATE_SESSION_TOKEN: {
      const { token } = action.payload;
      return {
        ...state,
        token,
      };
    }
    case questionTypes.LOAD_QUESTIONS: {
      const { questions } = action.payload;
      return {
        ...state,
        questions,
      };
    }
    default:
      return state;
  }
};
