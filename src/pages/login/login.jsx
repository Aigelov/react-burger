import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { authActions } from "../../services/actions";
import LoginStyles from "./login.module.css";

const initialValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);
  const { location } = useHistory();
  const { isAuthorized, error } = useSelector((store) => store.auth);

  if (isAuthorized) {
    return (
      <Redirect to={{ pathname: location.state?.from?.pathname || "/" }} />
    );
  }

  const onChange = ({ target }) => {
    const { name, value } = target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      !values.email ||
      !values.email.trim() ||
      !values.password ||
      !values.password.trim()
    ) {
      return;
    }

    dispatch(authActions.login(values));
  };

  const flexRow = `${LoginStyles.flexRow} text text_type_main-default text_color_inactive`;
  const errorDiv = `${LoginStyles.error} mt-6 mb-8`;

  return (
    <form onSubmit={handleLogin} className={LoginStyles.login}>
      <div className="text text_type_main-medium">Вход</div>
      <div className="mb-4" />
      <EmailInput onChange={onChange} value={values.email} name={"email"} />
      <div className="mb-4" />
      <PasswordInput
        onChange={onChange}
        value={values.password}
        name={"password"}
      />
      <div className="mb-6" />
      <Button type="primary" size="medium">
        Войти
      </Button>
      {error && <div className={errorDiv}>{error}</div>}
      {!error && <div className="mb-20" />}
      <div className={flexRow}>
        <div className="mr-1">Вы - новый пользователь?</div>

        <div>
          <Link to="/register" className={LoginStyles.link}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
      <div className="mb-4" />
      <div className={flexRow}>
        <div className="mr-1">Забыли пароль?</div>

        <div>
          <Link to="/forgot-password" className={LoginStyles.link}>
            Восстановить пароль
          </Link>
        </div>
      </div>
    </form>
  );
};
