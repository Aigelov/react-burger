import React, { memo } from "react";
import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from "./burger-constructor-bun.module.css";

export const BurgerConstructorBun = memo(function BurgerConstructorBun({
  type,
  text,
  ...props
}) {
  const ingredientElStyle = `${IngredientStyles.ingredientEl} ml-8 mr-5`;

  const newText = type === "top" ? `${text} (верх)` : `${text} (низ)`;

  return (
    <div className={IngredientStyles.ingredient}>
      <div className={ingredientElStyle}>
        <ConstructorElement {...props} type={type} text={newText} />
      </div>
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
