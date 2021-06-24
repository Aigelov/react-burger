import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { BurgerIngredientsTabsContent } from "../burger-ingredients-tabs-content/burger-ingredients-tabs-content";
import { BurgerIngredientsTabs } from "../burger-ingredients-tabs/burger-ingredients-tabs";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";
import { BurgerIngredientPropTypes } from "../../prop-types";

export const BurgerIngredients = ({ ingredients }) => {
  const [visible, setVisible] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

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

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape(BurgerIngredientPropTypes)),
};
