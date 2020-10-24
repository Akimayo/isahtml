import React, {useCallback, useContext, useEffect} from 'react'
import {Formik} from "formik";
import AuthService from "../../services/Auth.service";
import {FormikHelpers} from "formik/dist/types";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router";

interface LoginFormData {
  identity: string
  password: string
}

const LoginPage = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const loginFormInitialValues: LoginFormData = {
    identity: '',
    password: ''
  }

  const handleFormSubmit = useCallback(async ({identity, password}: LoginFormData, { setSubmitting }: FormikHelpers<LoginFormData>) => {
    try {
      await AuthService.login({identity, password})
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }, [])

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
                <label htmlFor="identity">{t('login.form.identity.label')}</label>
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
                <label htmlFor="password">{t('login.form.password.label')}</label>
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
