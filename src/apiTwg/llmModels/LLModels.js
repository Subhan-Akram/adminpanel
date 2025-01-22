import axios from "../axiosConfig/axiosConfig";

export function updateModelTags({ extId, tags }) {
  return axios.put(`/admin/api/v1/model/${extId}/tags`, { tags: tags });
}
