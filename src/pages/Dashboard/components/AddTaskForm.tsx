import React, {useCallback} from 'react'
import { Formik } from "formik";
import { BaseTask } from "../../../entities/Task";
import { useTranslation } from 'react-i18next';
import {FormikHelpers} from "formik/dist/types";

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

  const handleFormSubmit = useCallback(async ({ title, description }: BaseTask, { setSubmitting, setFieldError }: FormikHelpers<BaseTask>) => {
    try {
      await handleCreateTask({title, description, tag: -1})
    } catch (error) {
      const errorFields = Object.keys(error.response.data.errors);

      errorFields.forEach(field => {
        setFieldError(field.toLowerCase(), error.response.data.errors[field][0])
      })

      setSubmitting(false);
    }
  }, [handleCreateTask])

  return (
    <Formik<BaseTask> onSubmit={handleFormSubmit}
      initialValues={initialFormData}>
      {({ values, errors, handleBlur, handleSubmit, isSubmitting, handleChange }) => (
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
            {errors.title && (
              <small className="text-danger">{errors.title}</small>
            )}
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
            {errors.description && (
              <small className="text-danger">{errors.description}</small>
            )}
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
