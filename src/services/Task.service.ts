import axios from 'axios'
import {BaseTask, Task} from "../entities/Task";
import {
  TaskCreateResponse,
  TaskDeleteResponse,
  TaskGetResponse,
  TaskUpdateResponse
} from "./Task.types";
import {API_PATH_PREFIX} from "../constants";

class TaskService {
  static async create(task: BaseTask) {
    return await axios.post<TaskCreateResponse>(`${API_PATH_PREFIX}/tasks`, task)
  }

  static async get() {
    return await axios.post<TaskGetResponse>(`${API_PATH_PREFIX}/tasks`)
  }

  static async update(task: Task) {
    return await axios.put<TaskUpdateResponse>(`${API_PATH_PREFIX}/tasks/${task.id}`, task)
  }

  static async delete(task: Task) {
    return await axios.delete<TaskDeleteResponse>(`${API_PATH_PREFIX}/tasks/${task.id}`)
  }
}

export default TaskService
