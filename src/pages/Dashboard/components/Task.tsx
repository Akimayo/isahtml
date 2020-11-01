import React, { useCallback, useEffect, useState } from 'react';
import { Task } from "../../../entities/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { TagColor } from "../../../entities/TagColor";
import styled from "styled-components";
import {
  faCheck,
  faEdit,
  faTag,
  faTimes,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import p5, { Vector } from 'p5';
import './CompleteButton.scss';

interface TaskComponentProps {
  task: Task
  index: number
  handleUpdateTask: (task: Task, index: number) => void
  handleRemoveTask: (task: Task) => void
}

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

const TagEditElement = styled(FontAwesomeIcon) <{ active: boolean }>`
  margin-right: 10px;
  cursor: pointer;
  opacity: ${({ active }) => active ? '1' : '0.5'};
`

export const TaskComponent = ({ task, handleUpdateTask, handleRemoveTask, index }: TaskComponentProps) => {

  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [tag, setTag] = useState(task.tag)

  const handleCompleteTaskClick = useCallback(() => {
    handleUpdateTask({ ...task, isComplete: !task.isComplete }, index)
  }, [handleUpdateTask, task, index])

  const handleRemoveTaskClick = useCallback(() => {
    handleRemoveTask(task);
  }, [handleRemoveTask, task])

  const handleApplyChanges = useCallback(() => {
    setEditMode(false)
    handleUpdateTask({ ...task, title, description, tag }, index)
  }, [handleUpdateTask, task, title, description, tag, index])

  const handleCancelUpdate = useCallback(() => {
    setTitle(task.title)
    setDescription(task.description)
    setEditMode(false)
  }, [task])

  const animRef = React.createRef<HTMLLabelElement>();
  useEffect(() => {
    const s = new p5((p: p5) => {
      p.setup = () => {
        p.createCanvas(48, 48, "webgl");
      }
      let startChangeTime: number = -2;
      const SIZE_DURATION = 10, POP_DURATION = 40, POP_COUNT = 12;
      p.draw = () => {
        const currentComplete = Boolean(task.isComplete);
        if (startChangeTime === -2) startChangeTime = p.frameCount;
        p.background(255);
        p.pointLight(192, 255, 192, p.mouseX - 16, p.mouseY - 16, 16);
        p.ambientLight(255);
        p.noStroke();
        if (startChangeTime >= 0) {
          const animFrames = p.frameCount - startChangeTime;
          if (animFrames < SIZE_DURATION) {
            currentComplete ? p.ambientMaterial(192) : p.ambientMaterial(64, 192, 80);
            p.sphere(p.map(animFrames, 0, SIZE_DURATION, 12, 4));
          } else if (animFrames < SIZE_DURATION + POP_DURATION) {
            currentComplete ?
              p.fill(p.map(animFrames, SIZE_DURATION, SIZE_DURATION + POP_DURATION, 192, 64), 192, p.map(animFrames, SIZE_DURATION, SIZE_DURATION + POP_DURATION, 192, 80)) :
              p.fill(p.map(animFrames, SIZE_DURATION, SIZE_DURATION + POP_DURATION, 64, 192), 192, p.map(animFrames, SIZE_DURATION, SIZE_DURATION + POP_DURATION, 80, 192));
            const mag = p.sin(p.map(animFrames, SIZE_DURATION, SIZE_DURATION + POP_DURATION, 0, p.PI));
            for (let i = 0; i < POP_COUNT; i++) {
              p.push();
              p.translate(Vector.fromAngle(p.TWO_PI / POP_COUNT * i).setMag(20 * mag));
              p.sphere(2);
              p.pop();
            }
          } else if (animFrames < POP_DURATION + 2 * SIZE_DURATION) {
            currentComplete ? p.ambientMaterial(64, 192, 80) : p.ambientMaterial(192);
            p.sphere(p.map(animFrames, SIZE_DURATION + POP_DURATION, POP_DURATION + 2 * SIZE_DURATION, 4, 12));
          } else startChangeTime = -1;
        } else {
          currentComplete ? p.ambientMaterial(64, 192, 80) : p.ambientMaterial(192);
          p.sphere(12);
        }
      }
    }, animRef.current as HTMLElement);
    return () => s.remove();
  }, [task, animRef]);

  const renderTag = (index: number) => {

    const handleClick = () => {
      setTag(tag === index ? -1 : index)
    }

    return (
      <TagEditElement color={TagColor[index]} size="lg" icon={faTag} active={tag === index} onClick={handleClick} />
    )
  }

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
        <small className="d-flex align-items-center mt-2">
          {editMode ? (
            <>
              {renderTag(0)}
              {renderTag(1)}
              {renderTag(2)}
              {renderTag(3)}
            </>
          ) : (
              <>
                {TagColor[task.tag] && (
                  <FontAwesomeIcon color={TagColor[task.tag]} size="lg" icon={faTag} />
                )}
              </>
            )}
        </small>
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
