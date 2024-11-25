import axios from "../axiosConfig/axiosConfig";

export function getUserById({ associationExtid, companyExtid, extid }) {
  return axios.get(
    `/admin/api/v1/association/${associationExtid}/company/${companyExtid}/user/${extid}`
  );
}
export function deleteUser({ associationExtid, companyExtid, extid }) {
  return axios.delete(
    `/admin/api/v1/association/${associationExtid}/company/${companyExtid}/user/${extid}`
  );
}
export function updateUser({ associationExtid, companyExtid, extid }) {
  return axios.put(
    `/admin/api/v1/association/${associationExtid}/company/${companyExtid}/user/${extid}`
  );
}
export function getUsers() {
  return axios.get(`/admin/api/v1/user`);
}
export function getUserByEmail(email) {
  return axios.get(`/admin/api/v1/user/email/${email}`);
}

export function addUser({ associationExtid, companyExtid }) {
  return axios.post(
    `/admin/api/v1/association/${associationExtid}/company/${companyExtid}/user`
  );
}
