import { QuestionState } from "./reducer";

export const getSessionTokenFromState = (state: QuestionState) => state.token;

export const getQuestionsFromState = (state: QuestionState) => state.questions;
