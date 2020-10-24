import axios from 'axios'
import {BaseTask, Task} from "../entities/Task";
import {
  TaskCreateResponse,
  TaskDeleteResponse,
  TaskGetResponse,
  TaskUpdateResponse
} from "./Task.types";

const authUrl = 'localhost:5000/api/tasks'

class TaskService {
  static async create(task: BaseTask) {
    return await axios.post<TaskCreateResponse>(authUrl, task)
  }

  static async get() {
    return await axios.post<TaskGetResponse>(authUrl)
  }

  static async update(task: Task) {
    return await axios.put<TaskUpdateResponse>(`${authUrl}/${task.id}`, task)
  }

  static async delete(task: Task) {
    return await axios.delete<TaskDeleteResponse>(`${authUrl}/${task.id}`)
  }
}
