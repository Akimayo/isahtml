import React from "react";
import { User } from "../entities/User";

export interface UserData {
  user: User | null
  isLoading: boolean
}

export interface UserContextData {
  data: UserData
  update: (userData: UserData) => void
}

const initialContextData = {
  data: {
    user: null,
    isLoading: false
  },
  update: () => { }
}

export const UserContext = React.createContext<UserContextData>(initialContextData)
