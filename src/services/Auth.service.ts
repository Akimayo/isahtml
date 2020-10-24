import axios from 'axios'
import {LoginUser, UserWithPassword} from "../entities/User";
import {LoginResponse, RegisterResponse} from "./Auth.types";
import {API_URL} from "../constants";

class AuthService {
  static async register(user: UserWithPassword) {
    return await axios.post<RegisterResponse>(`${API_URL}/authentication/register`, user);
  }

  static async login(user: LoginUser) {
    return await axios.post<LoginResponse>(`${API_URL}/authentication/login`, user)
  }
}


export default AuthService
