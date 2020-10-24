import axios from 'axios'
import {BaseTask, Task} from "../entities/Task";
import {
  TaskCreateResponse,
  TaskDeleteResponse,
  TaskGetResponse,
  TaskUpdateResponse
} from "./Task.types";
import {API_URL} from "../constants";

class TaskService {
  static async create(task: BaseTask) {
    return await axios.post<TaskCreateResponse>(`${API_URL}/tasks`, task)
  }

  static async get() {
    return await axios.post<TaskGetResponse>(`${API_URL}/tasks`)
  }

  static async update(task: Task) {
    return await axios.put<TaskUpdateResponse>(`${API_URL}/tasks/${task.id}`, task)
  }

  static async delete(task: Task) {
    return await axios.delete<TaskDeleteResponse>(`${API_URL}/tasks/${task.id}`)
  }
}

export default TaskService
