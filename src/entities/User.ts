export interface User {
  id: string
  username: string
  email: string
  fullName: string
}

export interface UserWithPassword extends User {
  password: string
}

export interface LoginUser {
  identity: string
  password: string
}
