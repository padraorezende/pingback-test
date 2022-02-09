import { api } from "../../api/api"

export const loadQuestions = async (token: string) => {
    return api.get("/api.php", {params: {
        amount: 10,
        type: "boolean",
        token
    }})
}

export const generateSessionToken = async () => {
    return api.get("/api_token.php", {params: {
        command:"request"
    }})
}