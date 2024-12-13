import axios from "../axiosConfig/axiosConfig";

export function searchModels() {
  return axios.get("/api/v1/ai/models/text");
}

export function getTextModels() {
  return axios.get("/api/v1/ai/models/text");
}

export function getAllModels() {
  return axios.get("/api/v1/model/");
}

export function getModelTags() {
  return axios.get("/api/v1/model/tags");
}

export function getModelById(extId) {
  return axios.get(`/api/v1/model/${extId}`);
}

export function searchModelsByTags(tagNames) {
  return axios.post("/api/v1/model/search", { tagNames });
}

export function updateModelTags({ extId, tags }) {
  return axios.put(`/admin/api/v1/model/${extId}/tags`, { tags: tags });
}
