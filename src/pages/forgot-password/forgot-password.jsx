import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ForgotPasswordStyles from "./forgot-password.module.css";
import { authActions } from "../../services/actions/auth";

export const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ email: "" });
  const { isAuthenticated, error } = useSelector((store) => store.auth);

  const onChange = ({ target }) => {
    setValues({ email: target.value });
  };

  const handleSubmit = () => {
    dispatch(authActions.forgotPassword(values.email));
  };

  if (isAuthenticated) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  const flexRow = `${ForgotPasswordStyles.flexRow} text text_type_main-default text_color_inactive`;
  const errorDiv = `${ForgotPasswordStyles.error} mt-6 mb-4`;

  return (
    <div className={ForgotPasswordStyles.forgotPassword}>
      <div className="text text_type_main-medium">Восстановление пароля</div>
      <div className="mb-4" />
      <EmailInput onChange={onChange} value={values.email} name={"email"} />
      <div className="mb-6" />
      <Button type="primary" size="medium" onClick={handleSubmit}>
        Восстановить
      </Button>
      {error && <div className={errorDiv}>{error}</div>}
      {!error && <div className="mb-20" />}
      <div className={flexRow}>
        <div className="mr-1">Вспомнили пароль?</div>

        <div>
          <Link to="/login" className={ForgotPasswordStyles.link}>
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};
