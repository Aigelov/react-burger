import React, { ChangeEvent, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { validateFields } from "../../services/validate/validate";
import RegisterStyles from "./register.module.css";
import { authActions } from "../../services/actions";
import { useDispatch, useSelector } from "../../services/hooks";

type TInitialValues = {
  name: string;
  email: string;
  password: string;
};

const initialValues: TInitialValues = {
  name: "",
  email: "",
  password: "",
};

type TInitialInputErrors = {
  name: boolean;
  email: boolean;
  password: boolean;
};

const initialInputErrors: TInitialInputErrors = {
  name: false,
  email: false,
  password: false,
};

const fields = ["name", "email", "password"];

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState<TInitialValues>(initialValues);
  const [inputErrors, setInputErrors] =
    useState<TInitialInputErrors>(initialInputErrors);
  const { error } = useSelector(({ auth }) => auth);
  const refreshToken = localStorage.getItem("refreshToken");

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

  const handleRegister = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFields(fields, values, setInputErrors)) {
      return;
    }

    dispatch(authActions.register(values));
  };

  if (refreshToken) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  const flexRow = `${RegisterStyles.flexRow} text text_type_main-default text_color_inactive`;
  const errorDiv = `${RegisterStyles.error} mt-6 mb-8`;

  return (
    <div className={RegisterStyles.register}>
      <form onSubmit={handleRegister}>
        <div className="text text_type_main-medium">Регистрация</div>
        <div className="mb-4" />
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChange}
          value={values.name}
          name={"name"}
          size={"default"}
          error={inputErrors.name}
          errorText={"Имя обязательное поле"}
        />
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
          Зарегистрироваться
        </Button>
        {error && <div className={errorDiv}>{error}</div>}
        {!error && <div className="mb-20" />}
        <div className={flexRow}>
          <div className="mr-1">Уже зарегистрированы?</div>

          <div>
            <Link to="/login" className={RegisterStyles.link}>
              Войти
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
