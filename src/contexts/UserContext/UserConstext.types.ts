import { User } from "@custom-types/User";

export interface UserContextType {
  users: User[];
  setUsers: (users: User[]) => void;
}
