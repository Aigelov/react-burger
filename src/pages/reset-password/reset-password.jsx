import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { validateFields } from "../../services/validate/validate";
import ResetPasswordStyles from "./reset-password.module.css";
import { authActions } from "../../services/actions";

const initialValues = {
  password: "",
  code: "",
};

const initialInputErrors = {
  code: false,
};

const fields = ["code"];

export const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);
  const [inputErrors, setInputErrors] = useState(initialInputErrors);
  const { isAuthorized, emailReset, error } = useSelector(
    (store) => store.auth
  );

  const onChange = ({ target }) => {
    const { name, value } = target;

    setValues({
      ...values,
      [name]: value,
    });

    setInputErrors({
      ...inputErrors,
      [name]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateFields(fields, values, setInputErrors)) {
      return;
    }

    dispatch(authActions.resetPassword(values));
    dispatch(authActions.setEmailReset(false));
  };

  if (isAuthorized) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  if (!emailReset) {
    return <Redirect to={{ pathname: "/forgot-password" }} />;
  }

  const flexRow = `${ResetPasswordStyles.flexRow} text text_type_main-default text_color_inactive`;
  const errorDiv = `${ResetPasswordStyles.error} mt-6 mb-8`;

  return (
    <form onSubmit={handleSubmit} className={ResetPasswordStyles.resetPassword}>
      <div className="text text_type_main-medium">Восстановление пароля</div>
      <div className="mb-4" />
      <PasswordInput
        onChange={onChange}
        value={values.password}
        name={"password"}
      />
      <div className="mb-4" />
      <Input
        type={"text"}
        placeholder={"Введите код из письма"}
        onChange={onChange}
        value={values.code}
        name={"code"}
        size={"default"}
        error={inputErrors.code}
        errorText={"Код обязательное поле"}
      />
      <div className="mb-6" />
      <Button type="primary" size="medium">
        Сохранить
      </Button>
      {error && <div className={errorDiv}>{error}</div>}
      {!error && <div className="mb-20" />}
      <div className={flexRow}>
        <div className="mr-1">Вспомнили пароль?</div>

        <div>
          <Link to="/login" className={ResetPasswordStyles.link}>
            Войти
          </Link>
        </div>
      </div>
    </form>
  );
};
