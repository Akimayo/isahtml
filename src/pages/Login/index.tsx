import React, {useCallback} from 'react'
import {Formik} from "formik";
import AuthService from "../../services/Auth.service";
import {FormikHelpers} from "formik/dist/types";

interface LoginFormData {
  identity: string
  password: string
}

const LoginPage = () => {
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
      <div className="col-sm-12 col-md-6 offset-md-3">
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
              <input
                type="text"
                name="identity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.identity}
              />
              {errors.identity && touched.identity && errors.identity}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default LoginPage
