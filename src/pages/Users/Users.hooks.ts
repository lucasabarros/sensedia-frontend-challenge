import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetchUsers } from "@hooks/useFetchUsers";
import { UsersState } from "./Users.types";
import { User } from "@custom-types/User";

export const useUsers = () => {
  const { users, isLoading, error, setError } = useFetchUsers();
  const [view, setView] = useState<UsersState["view"]>("card");
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const closeErrorNotification = () => {
    setError(null);
  };

  const query = new URLSearchParams(location.search);
  const searchParam = query.get("search") || "";

  const [search, setSearch] = useState<UsersState["search"]>(searchParam);

  const filteredUsers = useMemo(
    () =>
      users.filter((user: User) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      ),
    [users, search]
  );

  const handleViewChange = useCallback(() => {
    setView((prevView) => (prevView === "card" ? "table" : "card"));
    setSearch("");
    navigate("");
  }, [navigate]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (search) {
      searchParams.set("search", search);
    } else {
      searchParams.delete("search");
    }
    navigate(`?${searchParams.toString()}`);
  }, [search, navigate, location.search]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [filteredUsers]);

  return {
    view,
    search,
    isLoading,
    error,
    inputRef,
    filteredUsers,
    handleViewChange,
    setSearch,
    closeErrorNotification,
  };
};
