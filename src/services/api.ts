import axios from "axios";
import { User } from "@custom-types/User";
import { API_URLS } from "@constants/api.constants";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_URLS.USERS);
  return response.data;
};
