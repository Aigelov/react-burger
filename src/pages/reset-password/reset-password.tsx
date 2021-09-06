import React, { ChangeEvent, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { validateFields } from "../../services/validate/validate";
import ResetPasswordStyles from "./reset-password.module.css";
import { authActions } from "../../services/actions";
import { useDispatch, useSelector } from "../../services/hooks";

type TInitialValues = {
  password: string;
  code: string;
};

const initialValues: TInitialValues = {
  password: "",
  code: "",
};

type TInitialInputErrors = {
  code: boolean;
};

const initialInputErrors: TInitialInputErrors = {
  code: false,
};

const fields = ["code"];

export const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState<TInitialValues>(initialValues);
  const [inputErrors, setInputErrors] =
    useState<TInitialInputErrors>(initialInputErrors);
  const { isAuthorized, emailReset, error } = useSelector(({ auth }) => auth);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
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
