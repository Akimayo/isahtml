export interface BaseTask {
  title: string
  description?: string
  isComplete?: boolean
}

export interface Task extends BaseTask{
  id: string
}
