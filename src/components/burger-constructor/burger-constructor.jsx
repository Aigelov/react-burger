import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorItem } from "../burger-constructor-item/burger-constructor-item";
import { BurgerConstructorBun } from "../burger-constructor-bun/burger-constructor-bun";
import { constructBurger, constructBurgerBun } from "./construct-burger";
import { updateIngredients } from "../../services/actions";
import IngredientsStyles from "./burger-constructor.module.css";
import { OrderButton } from "../order-button/order-button";
import { TotalPrice } from "../total-price/total-price";

export const BurgerConstructor = memo(function BurgerConstructor({
  onDropHandler,
}) {
  const dispatch = useDispatch();

  const { selectedIngredients: ingredients } = useSelector(
    (store) => store.burger
  );

  const [{ isHoverConstructor }, dropInConstructor] = useDrop({
    accept: "burgerIngredient",
    collect: (monitor) => ({
      isHoverConstructor: monitor.isOver(),
    }),
    drop(item) {
      onDropHandler(item);
    },
  });

  const findIngredient = useCallback(
    (uniqueID) => {
      const ingredient = ingredients.filter(
        (item) => item.uniqueID === uniqueID
      )[0];
      return {
        ingredient,
        index: ingredients.indexOf(ingredient),
      };
    },
    [ingredients]
  );
  const moveIngredient = useCallback(
    (uniqueID, atIndex) => {
      const { ingredient, index } = findIngredient(uniqueID);
      dispatch(updateIngredients(ingredient, index, atIndex));
    },
    [dispatch, findIngredient]
  );

  const [{ isHover }, dropTarget] = useDrop({
    accept: "burger",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const bunIngredient = ingredients.find((item) => item.type === "bun");

  const borderColorConstructor = isHoverConstructor
    ? "lightgreen"
    : "transparent";
  const borderColor = isHover ? "lightgreen" : "transparent";

  return (
    <section
      ref={dropInConstructor}
      className={IngredientsStyles.ingredients}
      style={{ borderColor: borderColorConstructor }}
    >
      {bunIngredient && (
        <BurgerConstructorBun {...constructBurgerBun(bunIngredient, "top")} />
      )}

      <div
        ref={dropTarget}
        className={IngredientsStyles.ingredientsMiddle}
        style={{ borderColor }}
      >
        {ingredients.length > 0 && (
          <div className={IngredientsStyles.middle}>
            {constructBurger(ingredients).map((ingredient, index) => (
              <BurgerConstructorItem
                key={ingredient._id + index}
                findIngredient={findIngredient}
                moveIngredient={moveIngredient}
                {...ingredient}
              />
            ))}
          </div>
        )}
      </div>

      {bunIngredient && (
        <BurgerConstructorBun
          {...constructBurgerBun(bunIngredient, "bottom")}
        />
      )}

      {ingredients.length > 0 && (
        <div className={IngredientsStyles.bottom}>
          <TotalPrice />
          <div className="ml-2 mr-10 mt-1">
            <CurrencyIcon type="primary" />
          </div>
          <OrderButton />
        </div>
      )}
    </section>
  );
});

BurgerConstructor.propTypes = {
  onDropHandler: PropTypes.func.isRequired,
};
