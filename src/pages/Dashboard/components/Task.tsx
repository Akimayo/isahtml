import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Task } from "../../../entities/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircle } from "@fortawesome/free-regular-svg-icons";
import { TagColor } from "../../../entities/TagColor";
import styled from "styled-components";
import {
  faCheck,
  faEdit,
  faTag,
  faTimes,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import p5 from 'p5';
import './CompleteButton.scss';

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

const Button = styled.button`
  border: 0;
  background: 0;
  padding: 0;
 `

const RemoveButton = styled.button`
  border: 0;
  background: 0;
  padding: 0;
`

export const TaskComponent = ({ task, handleUpdateTask, handleRemoveTask }: TaskComponentProps) => {

  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)

  const handleCompleteTaskClick = useCallback(() => {
    handleUpdateTask({...task, isComplete: !task.isComplete})
  }, [handleUpdateTask, task])

  const handleRemoveTaskClick = useCallback(() => {
    handleRemoveTask(task);
  }, [handleRemoveTask, task])

  const handleApplyChanges = useCallback(() => {
    setEditMode(false)
    handleUpdateTask({ ...task, title, description })
  }, [handleUpdateTask, task, title, description])

  const handleCancelUpdate = useCallback(() => {
    setTitle(task.title)
    setDescription(task.description)
    setEditMode(false)
  }, [task])

  const animRef = React.createRef<HTMLLabelElement>(), sketchRef = useRef<p5>();
  useEffect(() => {
    sketchRef.current = new p5((p: p5) => {
      p.setup = () => {
        p.createCanvas(32, 32, "webgl");
      }
      p.draw = () => {
        p.background(255);
        p.pointLight(192, 192, 192, p.mouseX-16, p.mouseY-16, 16);
        p.ambientLight(255);
        p.noStroke();
        task.isComplete ? p.ambientMaterial(64,192,80) : p.ambientMaterial(192);
        p.sphere(12);
      }
    }, animRef.current as HTMLElement);
    return () => sketchRef.current?.remove();
  }, [task]);

  return (
    <li className="list-group-item d-flex">
      <input type="checkbox" id={"completed-" + task.id} checked={task.isComplete} hidden />
      <label htmlFor={"#completed-" + task.id} className={"complete-button" + (task.isComplete ? " is-completed" : "")} ref={animRef} onClick={handleCompleteTaskClick}>
        <FontAwesomeIcon color={task.isComplete ? "green" : "lightgray"} size="2x" icon={faCheckCircle} />
      </label>
      {/* <CompleteButton onClick={handleCompleteTaskClick}>
        {task.isComplete ?
          <FontAwesomeIcon color="green" size="2x" icon={faCheckCircle} /> :
          <FontAwesomeIcon color="lightgray" size="2x" icon={faCircle} />}
      </CompleteButton> */}
      <div className="d-flex flex-column flex-grow-1 align-items-start">
        {editMode ? (
          <div className="input-group input-group-sm">
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              className="form-control"
              aria-label="title"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        ) : (
            <h5 className="mb-1">{title}</h5>
          )}
        {editMode ? (
          <div className="input-group input-group-sm mt-1">
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              className="form-control"
              aria-label="title"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        ) : (
            <p className="mb-1 text-muted">{description}</p>
          )}
        {TagColor[task.tag] && (
          <small className="d-flex align-items-center mt-2">
            <FontAwesomeIcon color={TagColor[task.tag]} size="lg" icon={faTag} />
          </small>
        )}
      </div>
      <div className="d-flex flex-column ml-5">
        {editMode ? (
          <div className="d-flex">
            <Button className="mr-2" onClick={handleApplyChanges}>
              <FontAwesomeIcon color="green" icon={faCheck} />
            </Button>
            <Button onClick={handleCancelUpdate}>
              <FontAwesomeIcon color="red" icon={faTimes} />
            </Button>
          </div>
        ) : (
            <Button onClick={() => setEditMode(!editMode)}>
              <FontAwesomeIcon color="gray" size="sm" icon={faEdit} />
            </Button>
          )}
        <RemoveButton onClick={handleRemoveTaskClick}>
          <FontAwesomeIcon color="red" size="sm" icon={faTrash} />
        </RemoveButton>
      </div>
    </li>
  );
};
