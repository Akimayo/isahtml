import axios from 'axios'
import {LoginUser, UserWithPassword} from "../entities/User";
import {LoginResponse, RegisterResponse} from "./Auth.types";

const authUrl = 'localhost:5000/api/authentication/'

class AuthService {
  static async register(user: UserWithPassword) {
    return await axios.post<RegisterResponse>(`${authUrl}register`, user);
  }

  static async login(user: LoginUser) {
    return await axios.post<LoginResponse>(`${authUrl}login`, user)
  }
}


export default AuthService
