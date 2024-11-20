import axios from "../axiosConfig/axiosConfig";

export function getRecommendedPrompt() {
  return axios.get("/api/v1/prompt/recommended");
}

export function getPromptHistory() {
  return axios.post("/api/v1/prompt/history");
}
