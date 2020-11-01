import { User } from "../entities/User";

export interface LoginResponse {
  id: string
  username: string
  email: string
  fullName: string
}

export interface RegisterResponse { }

export interface DeleteResponse { }

export interface GetCurrentUserResponse extends User { }
