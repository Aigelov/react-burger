import React, { FC, ReactElement } from "react";
import { NavLink, useHistory } from "react-router-dom";
import HeaderItemStyles from "./header-item.module.css";

interface IHeaderItem {
  svgIcon: ReactElement;
  text: string;
  path: string;
}

export const HeaderItem: FC<IHeaderItem> = ({ svgIcon, text, path = "/" }) => {
  const { location } = useHistory();
  const { pathname } = location;

  const headerItemStyle = `${HeaderItemStyles.menuItem} mb-3 mt-3 ml-5 mr-5`;
  const headerItemText = `${HeaderItemStyles.text} text text_type_main-default pl-2`;
  const headerNavLinkStyle = `${HeaderItemStyles.link} text_color_inactive`;

  return (
    <li className={headerItemStyle}>
      <NavLink
        to={path}
        className={headerNavLinkStyle}
        activeClassName={
          pathname === path ? HeaderItemStyles.active : undefined
        }
      >
        {svgIcon}
        <p className={headerItemText}>{text}</p>
      </NavLink>
    </li>
  );
};
