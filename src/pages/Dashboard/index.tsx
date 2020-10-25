import React, {useEffect} from 'react'
import useTasks from "../../hooks/useTasks"
import {Task} from "../../entities/Task";
import {TagColor} from "../../entities/TagColor";
import styled from 'styled-components'

const TagElement = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 10px;
  border-radius: 100%;
`

export const DashboardPage = () => {
  const {state, fetchTasks} = useTasks()

  const {loading, taskData, tasks} = state

  useEffect(() => {
    fetchTasks()
  }, [])

  if (loading === undefined) {
    return <h1>Something went wrong</h1>
  }

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="container">
      <div className="col-12 col-md-8 offset-md-2">
        <ul className="list-group list-group-flush">
          {tasks?.map(({title, isComplete, description, tag}: Task) => (
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{title}</h5>
                <small>{isComplete ? 'Completed' : 'Not Completed'}</small>
              </div>
              <p className="mb-1">{description}</p>
              <small className="d-flex align-items-center">Tag: <TagElement style={{backgroundColor: TagColor[tag]}} /></small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
