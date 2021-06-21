import React from "react";
import PropTypes from "prop-types";
import IngredientStyles from "./burger-constructor-item.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const BurgerConstructorItem = (props) => {
  const marginStyle = props.isLocked ? "ml-8 mr-5" : "ml-2 mr-2";

  return (
    <div className={IngredientStyles.ingredient}>
      {!props.isLocked && <DragIcon type="primary" />}
      <span className={marginStyle}>
        <ConstructorElement {...props} />
      </span>
    </div>
  );
};

BurgerConstructorItem.propTypes = {
  type: PropTypes.oneOf(["top", "bottom"]),
  isLocked: PropTypes.bool,
  handleClose: PropTypes.func,
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
