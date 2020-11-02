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

  const handleFormSubmit = useCallback(async (userData: RegisterFormData, {setSubmitting}: FormikHelpers<RegisterFormData>) => {
    try {
      await AuthService.register(userData)
      setSubmitting(false);
      history.push('/login')
    } catch (error) {
      console.error(error);
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
