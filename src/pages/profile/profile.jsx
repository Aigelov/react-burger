import React, { useState } from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileTabs } from "../../components/profile-tabs/profile-tabs";
import ProfileStyles from "./profile.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const initialInputErrors = {
  name: false,
};

export const ProfilePage = () => {
  const [values, setValues] = useState(initialValues);
  const [inputErrors, setInputErrors] = useState(initialInputErrors);

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

  return (
    <div className={ProfileStyles.profile}>
      <ProfileTabs />

      <div className={ProfileStyles.form}>
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
          Сохранить
        </Button>
      </div>
    </div>
  );
};
