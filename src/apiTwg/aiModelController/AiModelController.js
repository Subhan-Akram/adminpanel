import axios from "../axiosConfig/axiosConfig";

export function getModelFeature(modelExtIds) {
  return axios.post("/api/v1/model/feature", { modelExtIds });
}

export const getModelTags = () => {
  return axios.get("/api/v1/model/tags");
};

export const createSingleModelSet = (modelExtIds) => {
  return axios.post(`/api/v1/model/key`, { modelExtIds });
};

export const createModel = (payload) => {
  return axios.post(`/admin/api/v1/model`, payload);
};
export const updateModel = (payload) => {
  return axios.put(`/admin/api/v1/model/${payload.extId}`, payload);
};
export const addModelTags = (payload) => {
  axios.put(`/admin/api/v1/model/{extId}/tags`, payload);
};
export const deleteModel = (extId) => {
  return axios.delete(`/admin/api/v1/model/${extId}`);
};

export const getModels = () => {
  return axios.get("/admin/api/v1/model");
};
