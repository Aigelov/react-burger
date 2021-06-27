import React from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from "./burger-constructor-item.module.css";

export const BurgerConstructorItem = ({ ...props }) => {
  let ingredientElStyle = IngredientStyles.ingredientEl;
  ingredientElStyle += props.isLocked ? " ml-8 mr-5" : " ml-2 mr-2";

  return (
    <div className={IngredientStyles.ingredient}>
      {!props.isLocked && (
        <span className={IngredientStyles.drag}>
          <DragIcon type="primary" />
        </span>
      )}
      <span className={ingredientElStyle}>
        <ConstructorElement {...props} />
      </span>
    </div>
  );
};

BurgerConstructorItem.propTypes = {
  type: PropTypes.oneOf(["top", "bottom"]),
  isLocked: PropTypes.bool,
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
