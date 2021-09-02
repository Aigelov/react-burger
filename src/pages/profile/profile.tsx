import React, { ChangeEvent, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileTabs } from "../../components/profile-tabs/profile-tabs";
import { profileActions } from "../../services/actions";
import { removeEmptyParams } from "../../services/helpers";
import ProfileStyles from "./profile.module.css";
import { useDispatch, useSelector } from "../../services/hooks";

type TInitialValues = {
  name: string;
  email: string;
  password: string;
};

type TInitialInputErrors = {
  name: boolean;
};

const initialValues: TInitialValues = {
  name: "",
  email: "",
  password: "",
};

const initialInputErrors: TInitialInputErrors = {
  name: false,
};

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState<TInitialValues>(initialValues);
  const [inputErrors, setInputErrors] =
    useState<TInitialInputErrors>(initialInputErrors);
  const { user } = useSelector(({ profile }) => profile);
  const alert = useAlert();

  useEffect(() => {
    dispatch(profileActions.getUser());
  }, [dispatch]);

  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      ...user,
    }));
  }, [user]);

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

    dispatch(profileActions.updateUser(removeEmptyParams(values)));

    setValues((prevValues) => ({
      ...prevValues,
      password: "",
    }));
    alert.show("Пользователь успешно изменен");
  };

  const handleReset = () => {
    setValues({
      ...user,
      password: "",
    });
  };

  return (
    <div className={ProfileStyles.profile}>
      <ProfileTabs />

      <form onSubmit={handleSubmit} className={ProfileStyles.form}>
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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button type="primary" size="medium">
            Сохранить
          </Button>
          <div className="mr-4" />
          <Button type="primary" size="medium" onClick={handleReset}>
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};
