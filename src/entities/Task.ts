import {TagColor} from "./TagColor";

export interface BaseTask {
  title: string
  description?: string
  isComplete?: boolean
  tag: TagColor
}

export interface Task extends BaseTask {
  id: string
}
