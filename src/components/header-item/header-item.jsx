import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HeaderItemStyles from "./header-item.module.css";

export const HeaderItem = ({ svgIcon, text, active, path = "/" }) => {
  const headerItemStyle = `${HeaderItemStyles.menuItem} mb-3 mt-3 ml-5 mr-5`;
  const textState = active ? HeaderItemStyles[active] : "text_color_inactive";
  const headerItemText = `${HeaderItemStyles.text} ${textState} text text_type_main-default pl-2`;

  return (
    <li className={headerItemStyle}>
      <Link to={path} className={HeaderItemStyles.link}>
        {svgIcon}
        <p className={headerItemText}>{text}</p>
      </Link>
    </li>
  );
};

HeaderItem.propTypes = {
  svgIcon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.string,
};
