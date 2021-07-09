import React, { useContext, useRef, useState } from "react";
import { BurgerIngredientsTabsContent } from "../burger-ingredients-tabs-content/burger-ingredients-tabs-content";
import { BurgerIngredientsTabs } from "../burger-ingredients-tabs/burger-ingredients-tabs";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";
import { BurgerContext } from "../services/BurgerContext";

export const BurgerIngredients = ({ setSelectedIngredients }) => {
  const [visible, setVisible] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  const { ingredients, selectedIngredients } = useContext(BurgerContext);

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const burgerIngredientsStyle = `${BurgerIngredientsStyles.burgerIngredients} mt-10 mr-5`;

  const selectedIngredientsFilter = (ingredient, ingredients) => {
    const newIngredient = [ingredient];
    let newIngredients = [...ingredients];

    if (ingredient.type === "bun") {
      // При добавлении булки в бургер, она сразу добавляется и в верх, и в низ бургера.
      newIngredient.push(ingredient);

      // При добавлении другой булки в бургер, она заменяет существующую булку, если таковая есть,
      // при этом сразу и верх, и низ бургера, то есть в бургере может быть всего 2 булки, вверху и внизу.
      newIngredients = ingredients.filter((item) => item.type !== "bun");
    }

    // Новые ингредиенты добавляются в начало массива
    setSelectedIngredients(newIngredient.concat(newIngredients));
  };

  const ingredientClickHandler = (ingredientId) => {
    const filteredIngredient = ingredients
      .filter((item) => item._id === ingredientId)
      .reduce((acc, cur) => cur, {});

    setVisible(true);
    setIngredient(filteredIngredient);
    selectedIngredientsFilter(filteredIngredient, selectedIngredients);
  };

  const onModalClose = () => {
    setVisible(false);
  };

  return (
    <>
      <section className={burgerIngredientsStyle}>
        <p className="text text_type_main-large mb-5">Соберите бургер</p>

        <BurgerIngredientsTabs
          bunRef={bunRef}
          sauceRef={sauceRef}
          mainRef={mainRef}
        />

        <BurgerIngredientsTabsContent
          bunRef={bunRef}
          sauceRef={sauceRef}
          mainRef={mainRef}
          ingredients={ingredients}
          ingredientClickHandler={ingredientClickHandler}
        />
      </section>

      {visible && <IngredientDetails onClose={onModalClose} {...ingredient} />}
    </>
  );
};
