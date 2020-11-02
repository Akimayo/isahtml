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
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  const animRef = React.createRef<HTMLLabelElement>();
  useEffect(() => {
    const s = new p5((p: p5) => {
      p.setup = () => {
        p.createCanvas(48, 48, "webgl").attribute("aria-label", task.isComplete ? t("task.completed") : t("task.not-completed"));
      }
      let startChangeTime: number = -2;
      const SIZE_DURATION = 10, POP_DURATION = 40, POP_COUNT = 12, MOUSE_OFFSET = 24;
      p.draw = () => {
        const currentComplete = Boolean(task.isComplete);
        if (startChangeTime === -2) startChangeTime = p.frameCount;
        p.background(255);
        p.pointLight(192, 255, 192, p.mouseX - MOUSE_OFFSET, p.mouseY - MOUSE_OFFSET, 16);
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
    // eslint-disable-next-line
  }, [task]);

  const renderTag = (index: number) => {

    const handleClick = () => {
      setTag(tag === index ? -1 : index)
    }

    return (
      <Button onClick={handleClick} aria-label={tag === index ? t("task.tag.apply", t("color." + tag)) : t("task.tag.remove", t("color." + tag))}>
        <TagEditElement color={TagColor[index]} size="lg" icon={faTag} active={tag === index} />
      </Button>
    )
  }

  return (
    <li className="list-group-item d-flex" itemScope>
      <label htmlFor={"completed-" + task.id} className={"complete-button" + (task.isComplete ? " is-completed" : "")} ref={animRef} aria-label={task.isComplete ? t("task.reopen") : t("task.complete")} tabIndex={-1}>
        <input type="checkbox" id={"completed-" + task.id} checked={task.isComplete} itemProp="completed" onChange={handleCompleteTaskClick} tabIndex={0} />
        <FontAwesomeIcon color={task.isComplete ? "green" : "lightgray"} size="2x" icon={faCheckCircle} />
      </label>
      <div className="d-flex flex-column flex-grow-1 align-items-start">
        {editMode ? (
          <div className="form-group form-group-sm">
            <label htmlFor={"edit-title-" + task.id}>{t("task.form.title")}</label>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              className="form-control"
              name="title"
              id={"edit-title-" + task.id}
            />
          </div>
        ) : (
            <h5 className="mb-1" itemProp="name">{title}</h5>
          )}
        {editMode ? (
          <div className="form-group form-group-sm mt-1">
            <label htmlFor={"edit-description-" + task.id}>{t("task.form.description")}</label>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              className="form-control"
              name="description"
              id={"edit-description-" + task.id}
            />
          </div>
        ) : (
            <p className="mb-1 text-muted" itemProp="about">{description}</p>
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
                  <FontAwesomeIcon color={TagColor[task.tag]} size="lg" icon={faTag} aria-label={t("task.tag.has", { color: t("color." + tag) })} />
                )}
              </>
            )}
        </small>
      </div>
      <div className="d-flex flex-column ml-5">
        {editMode ? (
          <div className="d-flex">
            <Button className="mr-2" onClick={handleApplyChanges} aria-label={t("task.apply")} title={t("task.apply")}>
              <FontAwesomeIcon color="green" icon={faCheck} />
            </Button>
            <Button onClick={handleCancelUpdate} aria-label={t("task.revert")} title={t("task.revert")}>
              <FontAwesomeIcon color="red" icon={faTimes} />
            </Button>
          </div>
        ) : (
            <Button onClick={() => setEditMode(!editMode)} aria-label={t("task.edit")} title={t("task.edit")}>
              <FontAwesomeIcon color="gray" size="sm" icon={faEdit} />
            </Button>
          )}
        <RemoveButton onClick={handleRemoveTaskClick} aria-label={t("task.remove")} title={t("task.remove")}>
          <FontAwesomeIcon color="red" size="sm" icon={faTrash} />
        </RemoveButton>
      </div>
    </li>
  );
};
