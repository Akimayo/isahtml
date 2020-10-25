import {useCallback, useState} from "react";
import {Task} from "../entities/Task";
import TaskService from "../services/Task.service";

export interface TaskData {
  perPage: number
  currentPage: number
  pageCount: number
}

const useTasks = () => {
  const [loading, setLoading] = useState<boolean | undefined>(undefined)
  const [tasks, setTasks] = useState<Array<Task> | undefined>(undefined)
  const [taskData, setTaskData] = useState<TaskData | undefined>(undefined)

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const result = await TaskService.get()
      const { entities, ...data } = result.data
      setTasks(entities)
      setTaskData(data)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }, [])

  return {
    state: {
      loading,
      tasks,
      taskData
    },
    fetchTasks
  }
}

export default useTasks;
