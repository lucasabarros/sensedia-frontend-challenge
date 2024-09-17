import React, { createContext, useState, ReactNode } from "react";
import { UserContextType } from "./UserConstext.types";
import { User } from "@custom-types/User";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
