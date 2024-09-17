import { useEffect, useState, useCallback } from "react";
import { User } from "@custom-types/User";
import { API_URLS } from "@constants/api.constants";
import axios from "axios";

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get<User[]>(API_URLS.USERS);
      setUsers(response.data);
    } catch (err) {
      console.error("Falha ao buscar usuários: ", err);
      setError("Ocorreu um erro ao carregar os usuários");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, isLoading, error, setError };
};
