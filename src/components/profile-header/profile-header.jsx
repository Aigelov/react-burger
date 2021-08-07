import React from "react";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { HeaderItem } from "../header-item/header-item";
import ProfileStyles from "./profile-header.module.css";

export const ProfileHeader = () => {
  const svgIcon = <ProfileIcon type="secondary" />;
  const text = "Личный кабинет";

  return (
    <ul className={ProfileStyles.profile}>
      <HeaderItem svgIcon={svgIcon} text={text} path="/profile" />
    </ul>
  );
};
