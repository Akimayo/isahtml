import React, { useEffect } from 'react'
import useTasks from "../../hooks/useTasks"
import { Task } from "../../entities/Task";
import { AddTaskForm } from "./components/AddTaskForm";
import { TaskComponent } from "./components/Task";
import { Progress } from "../../components/Progress";
import { useTranslation } from 'react-i18next';

import './ModalBackdrop.scss';

export const DashboardPage = () => {
  const { state, actions } = useTasks()

  const { fetchTasks, createTask, removeTask, updateTask } = actions
  const { loading, tasks } = state
  const { t } = useTranslation();

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  if (loading === undefined) {
    return <h1>Something went wrong</h1>
  }
  return (
    <>
      <dialog className="modal fade" data-backdrop="false" id="addTaskDialog" tabIndex={0} aria-labelledby="addTaskDialogHeading">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="addTaskDialogHeading">{t("task.headers.add")}</h3>
              <button className="close" data-dismiss="modal" aria-label={t("task.dialog.close")}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <AddTaskForm handleCreateTask={createTask} />
            </div>
          </div>
        </div>
      </dialog>
      <div className="container-fluid mt-5">
        <div className="row">
          <aside className="col-12 col-md-2 col-lg-2 col-xl-1 offset-xl-2 pt-4">
            <button className="btn btn-primary" data-toggle="modal" data-target="#addTaskDialog">{t("task.dialog.open")}</button>
          </aside>
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <h1 className="display-4">{t("task.headers.tasks")}</h1>
            {loading ? (<Progress />) : (
              <ul className="list-group list-group-flush">
                {tasks?.map((task: Task, i: number) => (
                  <TaskComponent
                    task={task}
                    handleRemoveTask={removeTask}
                    handleUpdateTask={updateTask}
                    index={i}
                    key={i}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
