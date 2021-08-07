import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileTabs } from "../../components/profile-tabs/profile-tabs";
import { profileActions } from "../../services/actions/profile";
import { removeEmptyParams } from "../../services/helpers";
import ProfileStyles from "./profile.module.css";
import { useHistory } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const initialInputErrors = {
  name: false,
};

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState(initialValues);
  const [inputErrors, setInputErrors] = useState(initialInputErrors);
  const { user } = useSelector((store) => store.profile);

  useEffect(() => {
    dispatch(profileActions.getUser());
  }, [dispatch]);

  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      ...user,
    }));
  }, [user]);

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

  const handleSubmit = () => {
    dispatch(profileActions.updateUser(removeEmptyParams(values)));
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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button
            type="primary"
            size="medium"
            style={{ marginRight: "16px" }}
            onClick={handleSubmit}
          >
            Сохранить
          </Button>
          <Button type="primary" size="medium" onClick={handleReset}>
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
};
