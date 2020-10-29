import React, {useEffect} from 'react'
import useTasks from "../../hooks/useTasks"
import {Task} from "../../entities/Task";
import {AddTaskForm} from "./components/AddTaskForm";
import {TaskComponent} from "./components/Task";

export const DashboardPage = () => {
  const {state, actions} = useTasks()

  const {fetchTasks, createTask, removeTask, updateTask} = actions
  const {loading, taskData, tasks} = state

  useEffect(() => {
    fetchTasks()
  }, [])

  if (loading === undefined) {
    return <h1>Something went wrong</h1>
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <aside className="col-12 col-md-4 col-lg-4 col-xl-2 offset-xl-2">
          <h2 className="display-4">Add task</h2>
          <AddTaskForm handleCreateTask={createTask}/>
        </aside>
        <div className="col-12 col-md-8 col-lg-6 offset-lg-1 col-xl-4">
          <h1 className="display-4">Tasks</h1>
          {loading ? (<h1>Loading...</h1>) : (
            <ul className="list-group list-group-flush">
              {tasks?.map((task: Task) => (
                <TaskComponent
                  task={task}
                  handleRemoveTask={removeTask}
                  handleUpdateTask={updateTask}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
