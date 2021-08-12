import React from "react";
import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
import HeaderItemStyles from "./header-item.module.css";

export const HeaderItem = ({ svgIcon, text, path = "/" }) => {
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
        activeClassName={pathname === path ? HeaderItemStyles.active : null}
      >
        {svgIcon}
        <p className={headerItemText}>{text}</p>
      </NavLink>
    </li>
  );
};

HeaderItem.propTypes = {
  svgIcon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.string,
};
