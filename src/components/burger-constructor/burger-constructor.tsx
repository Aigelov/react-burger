import React, { FC, memo, useCallback } from "react";
import { useDrop } from "react-dnd";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorItem } from "../burger-constructor-item/burger-constructor-item";
import { BurgerConstructorBun } from "../burger-constructor-bun/burger-constructor-bun";
import { constructBurger, constructBurgerBun } from "./construct-burger";
import { updateIngredients } from "../../services/actions";
import IngredientsStyles from "./burger-constructor.module.css";
import { OrderButton } from "../order-button/order-button";
import { TotalPrice } from "../total-price/total-price";
import { useDispatch, useSelector } from "../../services/hooks";
import {
  IBurgerIngredient,
  IBurgerIngredientID,
  TFindIngredient,
  TMoveIngredient,
} from "../../services/models";

interface IBurgerConstructor {
  onDropHandler: (item: IBurgerIngredientID) => void;
}

export const BurgerConstructor: FC<IBurgerConstructor> = memo(
  ({ onDropHandler }) => {
    const dispatch = useDispatch();

    const ingredients: Array<IBurgerIngredient> = useSelector(
      ({ burger }) => burger.selectedIngredients
    );

    const [{ isHoverConstructor }, dropInConstructor] = useDrop({
      accept: "burgerIngredient",
      collect: (monitor) => ({
        isHoverConstructor: monitor.isOver(),
      }),
      drop(item: IBurgerIngredientID) {
        onDropHandler(item);
      },
    });

    const findIngredient = useCallback<TFindIngredient>(
      (uniqueID: string) => {
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

    const moveIngredient = useCallback<TMoveIngredient>(
      (uniqueID: string, atIndex: number | null) => {
        const { ingredient, index } = findIngredient(uniqueID);
        dispatch(updateIngredients(ingredient, index, atIndex || 0));
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
                  ingredient={ingredient}
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
  }
);
