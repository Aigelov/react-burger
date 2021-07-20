import React, { memo } from "react";
import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from "./burger-constructor-bun.module.css";

export const BurgerConstructorBun = memo(function BurgerConstructorBun({
  ...props
}) {
  const ingredientElStyle = `${IngredientStyles.ingredientEl} ml-8 mr-5`;

  return (
    <div className={IngredientStyles.ingredient}>
      <span className={ingredientElStyle}>
        <ConstructorElement {...props} />
      </span>
    </div>
  );
});

BurgerConstructorBun.propTypes = {
  type: PropTypes.oneOf(["top", "bottom"]),
  isLocked: PropTypes.bool,
  _id: PropTypes.string.isRequired,
  uniqueID: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
