import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { BurgerIngredientsTabsContent } from "../burger-ingredients-tabs-content/burger-ingredients-tabs-content";
import { BurgerIngredientsTabs } from "../burger-ingredients-tabs/burger-ingredients-tabs";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { addIngredient, increaseCount } from "../../services/actions/burger";
import { ingredientsActions } from "../../services/slices/ingredients";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";
import { Spinner } from "../spinner/spinner";

export const BurgerIngredients = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  const { selectedIngredients } = useSelector((store) => store.burger);

  const { ingredients, loading } = useSelector(
    (store) => store.ingredientsReducer
  );

  const [currentTab, setCurrentTab] = useState("bun");

  const scrollContainerRef = useRef(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const alert = useAlert();

  useEffect(() => {
    dispatch(ingredientsActions.findAll());
  }, [dispatch]);

  const ingredientClickHandler = (ingredientId) => {
    const selectedIngredient = ingredients
      .filter((item) => item._id === ingredientId)
      .reduce((acc, cur) => cur, {});

    if (selectedIngredient.type !== "bun" && !selectedIngredients.length) {
      alert.show("Сначала надо выбрать булку");
      return false;
    }

    setVisible(true);
    setIngredient(selectedIngredient);

    dispatch(addIngredient(selectedIngredient, selectedIngredients));
    dispatch(increaseCount(selectedIngredient));
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

      {visible && <IngredientDetails onClose={onModalClose} {...ingredient} />}
    </>
  );
};
