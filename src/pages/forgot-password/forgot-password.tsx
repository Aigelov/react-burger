import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ForgotPasswordStyles from "./forgot-password.module.css";
import { authActions } from "../../services/actions";
import { useDispatch, useSelector } from "../../services/hooks";

interface IForgotPasswordValues {
  email: string;
}

export const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState<IForgotPasswordValues>({ email: "" });
  const { emailReset, error } = useSelector(({ auth }) => auth);
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (emailReset) {
      history.replace("/reset-password");
    }
  }, [history, emailReset]);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({ email: target.value });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.email || !values.email.trim()) {
      return;
    }

    dispatch(authActions.forgotPassword(values.email));
  };

  if (refreshToken) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  const flexRow = `${ForgotPasswordStyles.flexRow} text text_type_main-default text_color_inactive`;
  const errorDiv = `${ForgotPasswordStyles.error} mt-6 mb-4`;

  return (
    <form
      onSubmit={handleSubmit}
      className={ForgotPasswordStyles.forgotPassword}
    >
      <div className="text text_type_main-medium">Восстановление пароля</div>
      <div className="mb-4" />
      <EmailInput onChange={onChange} value={values.email} name={"email"} />
      <div className="mb-6" />
      <Button type="primary" size="medium">
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
    </form>
  );
};
