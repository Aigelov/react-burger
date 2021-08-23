import React from "react";
import PropTypes from "prop-types";
import IngredientDetailsItemStyles from "./ingredient-details-item.module.css";

export const IngredientDetailsItem = ({ title, info }) => {
  return (
    <div className={IngredientDetailsItemStyles.ingredientDetailsItem}>
      <span className="text text_type_main-default">{title}</span>
      <span className="text text_type_digits-default">{info}</span>
    </div>
  );
};

IngredientDetailsItem.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.number.isRequired,
};
