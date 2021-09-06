import React, { FC, memo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from "./burger-constructor-bun.module.css";
import { IConstructedBurgerBun } from "../../services/models";

export const BurgerConstructorBun: FC<IConstructedBurgerBun> = memo(
  ({ type, text, ...props }) => {
    const newText = type === "top" ? `${text} (верх)` : `${text} (низ)`;

    return (
      <div className={IngredientStyles.ingredient}>
        <div className={IngredientStyles.ingredientEl}>
          <ConstructorElement {...props} type={type} text={newText} />
        </div>
      </div>
    );
  }
);
