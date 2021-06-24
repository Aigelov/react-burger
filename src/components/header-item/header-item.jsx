import React from "react";
import PropTypes from "prop-types";
import HeaderItemStyles from "./header-item.module.css";

export const HeaderItem = ({ svgIcon, text, active }) => {
  const headerItemStyle = `${HeaderItemStyles.menuItem} mb-3 mt-3 ml-5 mr-5`;
  const textState = active ? HeaderItemStyles[active] : "text_color_inactive";
  const headerItemText = `${HeaderItemStyles.text} ${textState} text text_type_main-default pl-2`;

  return (
    <li className={headerItemStyle}>
      {svgIcon}
      <p className={headerItemText}>{text}</p>
    </li>
  );
};

HeaderItem.propTypes = {
  svgIcon: PropTypes.object,
  text: PropTypes.string,
  active: PropTypes.string,
};
