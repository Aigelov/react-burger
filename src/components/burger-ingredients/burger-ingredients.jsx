import React, { useRef, useState } from "react";
import { BurgerIngredientsTabsContent } from "../burger-ingredients-tabs-content/burger-ingredients-tabs-content";
import { BurgerIngredientsTabs } from "../burger-ingredients-tabs/burger-ingredients-tabs";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";

export const BurgerIngredients = ({ ingredients }) => {
  const [visible, setVisible] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  const rollRef = useRef(null);
  const sauceRef = useRef(null);
  const fillingRef = useRef(null);

  const burgerIngredientsStyle = `${BurgerIngredientsStyles.burgerIngredients} mt-10 mr-5`;

  const ingredientClickHandler = (ingredientId) => {
    const filteredIngredient = ingredients
      .filter((item) => item._id === ingredientId)
      .reduce((acc, cur) => cur, {});

    setVisible(true);
    setIngredient(filteredIngredient);
  };

  const onModalClose = () => {
    setVisible(false);
  };

  return (
    <>
      <section className={burgerIngredientsStyle}>
        <p className="text text_type_main-large mb-5">Соберите бургер</p>

        <BurgerIngredientsTabs
          rollRef={rollRef}
          sauceRef={sauceRef}
          fillingRef={fillingRef}
        />

        <BurgerIngredientsTabsContent
          rollRef={rollRef}
          sauceRef={sauceRef}
          fillingRef={fillingRef}
          ingredients={ingredients}
          ingredientClickHandler={ingredientClickHandler}
        />
      </section>

      {visible && <IngredientDetails onClose={onModalClose} {...ingredient} />}
    </>
  );
};
