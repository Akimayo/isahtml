import React, { useCallback, useContext } from 'react'
import { Formik } from "formik";
import AuthService from "../../services/Auth.service";
import { FormikHelpers } from "formik/dist/types";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { UserContext } from "../../contexts/User.context";

interface LoginFormData {
  identity: string
  password: string
}

const loginFormInitialValues: LoginFormData = {
  identity: '',
  password: ''
}

const LoginPage = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { update } = useContext(UserContext);

  const handleFormSubmit = useCallback(async ({ identity, password }: LoginFormData, { setSubmitting }: FormikHelpers<LoginFormData>) => {
    try {
      const response = await AuthService.login({ identity, password })
      update({ isLoading: false, user: response.data })
      history.push('/dashboard')
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }, [history, update])

  return (
    <div className="container">
      <div className="col-sm-12 col-md-6 offset-md-3 mt-5">
        <Formik<LoginFormData>
          initialValues={loginFormInitialValues}
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
                  <label htmlFor="identity">{t('login.form.identity')}</label>
                  <input
                    type="text"
                    id="identity"
                    name="identity"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.identity}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">{t('login.form.password')}</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                <button type="submit" className="btn btn-primary float-right" disabled={isSubmitting}>
                  {t('login.form.submit')}
                </button>
              </form>
            )}
        </Formik>
      </div>
    </div>
  )
}

export default LoginPage
