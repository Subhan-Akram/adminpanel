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
