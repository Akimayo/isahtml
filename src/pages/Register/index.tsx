import React, {useCallback, useContext} from 'react';
import {useHistory} from "react-router";
import {UserContext} from "../../contexts/User.context";
import {useTranslation} from "react-i18next";
import {Formik} from "formik";
import {FormikHelpers} from "formik/dist/types";
import AuthService from "../../services/Auth.service";

interface RegisterFormData {
  email: string
  username: string
  fullName: string
  password: string
  passwordConfirmation: string
}

const registerFormInitialValues: RegisterFormData = {
  email: '',
  username: '',
  fullName: '',
  password: '',
  passwordConfirmation: '',
}

const RegisterPage = () => {
  const {t} = useTranslation();
  const history = useHistory();
  const {update} = useContext(UserContext);

  const handleFormSubmit = useCallback(async (userData: RegisterFormData, {setSubmitting, setFieldError}: FormikHelpers<RegisterFormData>) => {
    try {
      await AuthService.register(userData)
      setSubmitting(false);
      history.push('/login')
    } catch (error) {
      const errorFields = Object.keys(error.response.data.errors);

      errorFields.forEach(field => {
        setFieldError(field.charAt(0).toLowerCase() + field.slice(1), error.response.data.errors[field][0])
      })

      setSubmitting(false);
    }
  }, [history, update])

  return (
    <div className="container">
      <div className="col-sm-12 col-md-6 offset-md-3 mt-5">
        <Formik<RegisterFormData>
          initialValues={registerFormInitialValues}
          onSubmit={handleFormSubmit}
        >
          {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting
            }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">{t('register.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="username">{t('register.form.username')}</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {errors.username && (
                  <small className="text-danger">{errors.username}</small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="fullName">{t('register.form.fullName')}</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                />
                {errors.fullName && (
                  <small className="text-danger">{errors.fullName}</small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">{t('register.form.password')}</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="passwordConfirmation">{t('register.form.passwordConfirmation')}</label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirmation}
                />
                {errors.passwordConfirmation && (
                  <small className="text-danger">{errors.passwordConfirmation}</small>
                )}
              </div>
              <button type="submit" className="btn btn-primary float-right"
                      disabled={isSubmitting}>
                {t('register.form.submit')}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default RegisterPage;
