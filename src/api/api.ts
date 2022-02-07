import axios from "axios";
import { Questions } from "../types/Questions";

export const searchQuestions = async (): Promise<Questions> => {
    const response = await axios.get("https://opentdb.com/api.php?amount=10")

    return response.data;
}
