import React from 'react'
import { Formik } from "formik";
import { BaseTask } from "../../../entities/Task";
import { useTranslation } from 'react-i18next';

interface AddTaskFormProps {
  handleCreateTask: (task: BaseTask) => Promise<void>
}

const initialFormData = {
  title: '',
  description: '',
  tag: -1,
  isComplete: false
}

export const AddTaskForm = ({ handleCreateTask }: AddTaskFormProps) => {
  const { t } = useTranslation()

  return (
    <Formik<BaseTask> onSubmit={handleCreateTask}
      initialValues={initialFormData}>
      {({ values, handleBlur, handleSubmit, isSubmitting, handleChange }) => (
        <form className="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">{t('task.form.title')}</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="description">{t('task.form.description')}</label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
          </div>
          <button type="submit" className="btn btn-primary float-right"
            disabled={isSubmitting}>
            {t('task.form.submit')}
          </button>
        </form>
      )}
    </Formik>
  );
};
