import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { authActions } from "../../services/actions";
import ProfileTabsStyles from "./profile-tabs.module.css";
import { useDispatch, useSelector } from "../../services/hooks";

interface ITab {
  title: string;
  path: string;
}

const tabs: ITab[] = [
  { title: "Профиль", path: "/profile" },
  { title: "История заказов", path: "/profile/orders" },
  { title: "Выход", path: "/logout" },
];

export const ProfileTabs = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { location } = history;
  const [current, setCurrent] = useState<string>("/profile");
  const { refreshToken } = useSelector(({ auth }) => auth);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);

  const onTabClick = (tab: ITab) => {
    if (tab.path === "/logout") {
      dispatch(authActions.logout(refreshToken));
      history.push("/login");
      return;
    }

    setCurrent(tab.path);
    history.push(tab.path);
  };

  return (
    <div className={ProfileTabsStyles.tabs}>
      {tabs.map((tab) => (
        <Tab
          key={tab.path}
          value={tab.path}
          active={current === tab.path}
          onClick={() => onTabClick(tab)}
        >
          {tab.title}
        </Tab>
      ))}
    </div>
  );
};
