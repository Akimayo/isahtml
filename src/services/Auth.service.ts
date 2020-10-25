import axios from 'axios'
import {LoginUser, UserWithPassword} from "../entities/User";
import {
  DeleteResponse,
  GetCurrentUserResponse,
  LoginResponse,
  RegisterResponse
} from "./Auth.types";
import {API_PATH_PREFIX} from "../constants";

class AuthService {
  static async register(user: UserWithPassword) {
    return await axios.post<RegisterResponse>(`${API_PATH_PREFIX}/authentication/register`, user, {withCredentials: true});
  }

  static async login(user: LoginUser) {
    return await axios.post<LoginResponse>(`${API_PATH_PREFIX}/authentication/login`, user, {withCredentials: true})
  }

  static async logout() {
    return await axios.delete<DeleteResponse>(`${API_PATH_PREFIX}/authentication`)
  }

  static async getCurrentUser() {
    return await axios.get<GetCurrentUserResponse>(`${API_PATH_PREFIX}/users`, {withCredentials: true})
  }
}


export default AuthService
