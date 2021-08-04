import React from "react";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { HeaderItem } from "../header-item/header-item";
import ProfileStyles from "./profile-header.module.css";

export const ProfileHeader = () => {
  const svgIcon = <ProfileIcon type="secondary" />;
  const text = "Личный кабинет";
  const active = null;

  return (
    <ul className={ProfileStyles.profile}>
      <HeaderItem
        svgIcon={svgIcon}
        text={text}
        active={active}
        path="/profile"
      />
    </ul>
  );
};
