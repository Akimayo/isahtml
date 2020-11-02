import { useCallback, useState } from "react";
import { BaseTask, Task } from "../entities/Task";
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
      console.error(e)
    } finally {
      setLoading(false);
    }
  }, [])

  const createTask = useCallback(async (task: BaseTask) => {
    try {
      await TaskService.create(task);
      await fetchTasks()
    } catch (e) {
      throw e;
    }
  }, [fetchTasks])

  const removeTask = useCallback(async (task: Task) => {
    try {
      await TaskService.delete(task)
      await fetchTasks()
    } catch (e) {
      throw e;
    }
  }, [fetchTasks])

  const updateTask = useCallback(async (task: Task, index: number) => {
    try {
      await TaskService.update(task)
      tasks && setTasks([...tasks.slice(0, index), task, ...tasks.slice(index + 1)])
    } catch (e) {
      throw e;
    }
  }, [tasks])

  return {
    state: {
      loading,
      tasks,
      taskData
    },
    actions: {
      fetchTasks,
      createTask,
      removeTask,
      updateTask,
    }
  }
}

export default useTasks;
