import axios from "../axiosConfig/axiosConfig";

export function promptChat(payload) {
  return axios.post("/api/v1/ai/models/text", payload);
}
