import React, {useCallback} from 'react';
import {Task} from "../../../entities/Task";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faCircle} from "@fortawesome/free-regular-svg-icons";
import {TagColor} from "../../../entities/TagColor";
import styled from "styled-components";
import {faEdit, faTag, faTrash} from "@fortawesome/free-solid-svg-icons";

interface TaskComponentProps {
  task: Task
  handleUpdateTask: (task: Task) => void
  handleRemoveTask: (task: Task) => void
}

const CompleteButton = styled.button`
  border: 0;
  background: 0;
  padding: 0;
  margin-right: 10px;
`

const EditButton = styled.button`
  border: 0;
  background: 0;
  padding: 0;
 `

const RemoveButton = styled.button`
  border: 0;
  background: 0;
  padding: 0;
`

export const TaskComponent = ({task, handleUpdateTask, handleRemoveTask}: TaskComponentProps) => {

  const handleCompleteTaskClick = useCallback(() => {
    handleUpdateTask({...task, isComplete: !task.isComplete})
  }, [handleUpdateTask, task])

  const handleRemoveTaskClick = useCallback(() => {
    handleRemoveTask(task);
  }, [handleRemoveTask, task])

  return (
    <li className="list-group-item d-flex">
      <CompleteButton onClick={handleCompleteTaskClick}>
        {task.isComplete ?
          <FontAwesomeIcon color="green" size="2x" icon={faCheckCircle}/> :
          <FontAwesomeIcon color="lightgray" size="2x" icon={faCircle}/>}
      </CompleteButton>
      <div className="d-flex flex-column flex-grow-1">
        <h5 className="mb-1">{task.title}</h5>
        <p className="mb-1">{task.description}</p>
        {TagColor[task.tag] && (
          <small className="d-flex align-items-center">
            <FontAwesomeIcon color={TagColor[task.tag]} size="lg" icon={faTag}/>
          </small>
        )}
      </div>
      <div className="d-flex flex-column justify-content-between">
        <EditButton>
          <FontAwesomeIcon color="gray" size="sm" icon={faEdit}/>
        </EditButton>
        <RemoveButton onClick={handleRemoveTaskClick}>
          <FontAwesomeIcon color="red" size="sm" icon={faTrash}/>
        </RemoveButton>
      </div>
    </li>
  );
};
