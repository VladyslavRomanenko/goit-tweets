import axios from "axios";

axios.defaults.baseURL = "https://64c7bd3fa1fe0128fbd53a74.mockapi.io";

export const getUsers = async () => {
  const { data } = await axios.get("/users");
  return data;
};

export const updateUser = async ({ id, isFollow, followers }) => {
  const { data } = await axios.put(`/users/${id}`, { isFollow, followers });
  return data;
};
