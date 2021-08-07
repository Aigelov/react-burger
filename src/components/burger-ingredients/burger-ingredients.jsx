import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { BurgerIngredientsTabsContent } from "../burger-ingredients-tabs-content/burger-ingredients-tabs-content";
import { BurgerIngredientsTabs } from "../burger-ingredients-tabs/burger-ingredients-tabs";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";
import { Spinner } from "../spinner/spinner";
import { Modal } from "../modal/modal";

export const BurgerIngredients = () => {
  const history = useHistory();
  const location = useLocation();

  const [visible, setVisible] = useState(false);
  const [ingredient, setIngredient] = useState(null);
  const [currentTab, setCurrentTab] = useState("bun");

  const { ingredients, loading } = useSelector((store) => store.burger);

  const scrollContainerRef = useRef(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const ingredientClickHandler = (ingredientId) => {
    const selectedIngredient = ingredients
      .filter((item) => item._id === ingredientId)
      .reduce((acc, cur) => cur, {});

    setVisible(true);
    setIngredient(selectedIngredient);

    history.push({
      pathname: `/ingredients/${selectedIngredient._id}`,
      state: { modal: location },
    });
  };

  const tabClickHandler = (tab, tabRef) => {
    setCurrentTab(tab);
    tabRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    // Будем сравнивать расстояния от заголовков до верхней части скроллящегося контейнера
    const scrollContainerPosition =
      scrollContainerRef.current.getBoundingClientRect().top;
    const firstHeaderPosition = bunRef.current.getBoundingClientRect().top;
    const secondHeaderPosition = sauceRef.current.getBoundingClientRect().top;
    const thirdHeaderPosition = mainRef.current.getBoundingClientRect().top;

    // Используем Math.abs, так как число может получиться отрицательное
    const firstDiff = Math.abs(scrollContainerPosition - firstHeaderPosition);
    const secondDiff = Math.abs(scrollContainerPosition - secondHeaderPosition);
    const thirdDiff = Math.abs(scrollContainerPosition - thirdHeaderPosition);

    if (firstDiff < secondDiff) {
      setCurrentTab("bun");
    } else if (secondDiff < thirdDiff) {
      setCurrentTab("sauce");
    } else {
      setCurrentTab("main");
    }
  };

  const onModalClose = () => {
    setVisible(false);
  };

  const burgerIngredientsStyle = `${BurgerIngredientsStyles.burgerIngredients} mt-10 mr-5`;

  return (
    <>
      <section className={burgerIngredientsStyle}>
        {loading && <Spinner />}

        {!loading && ingredients.length && (
          <>
            <p className="text text_type_main-large mb-5">Соберите бургер</p>

            <BurgerIngredientsTabs
              bunRef={bunRef}
              sauceRef={sauceRef}
              mainRef={mainRef}
              currentTab={currentTab}
              tabClickHandler={tabClickHandler}
            />

            <BurgerIngredientsTabsContent
              bunRef={bunRef}
              sauceRef={sauceRef}
              mainRef={mainRef}
              ingredients={ingredients}
              ingredientClickHandler={ingredientClickHandler}
              scrollContainerRef={scrollContainerRef}
              handleScroll={handleScroll}
            />
          </>
        )}
      </section>

      {visible && (
        <Modal header="Детали ингредиента" onClose={onModalClose}>
          <IngredientDetails {...ingredient} />
        </Modal>
      )}
    </>
  );
};
