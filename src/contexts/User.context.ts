import React from "react";
import {User} from "../entities/User";

export interface UserContextData {
  user: User | null
  isLoading: boolean
}

const initialContextData = {
  user: null,
  isLoading: false
}

export const UserContext = React.createContext<UserContextData>(initialContextData)
