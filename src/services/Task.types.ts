import { Task } from "../entities/Task";

interface TaskBaseResponse {
  id: string
  title: string
  description: string
  isComplete: boolean
}

export interface TaskCreateResponse extends TaskBaseResponse { }

export interface TaskUpdateResponse extends TaskBaseResponse { }

export interface TaskDeleteResponse { }

export interface TaskGetResponse {
  entities: Array<Task>
  perPage: number
  currentPage: number
  pageCount: number
}
