import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BurgerIngredientsTabsContent } from "../burger-ingredients-tabs-content/burger-ingredients-tabs-content";
import { BurgerIngredientsTabs } from "../burger-ingredients-tabs/burger-ingredients-tabs";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";
import { useSelector } from "../../services/hooks";
import { Spinner } from "../spinner/spinner";
import { Modal } from "../modal/modal";
import { IBurgerIngredient } from "../../services/models";

export const BurgerIngredients = () => {
  const history = useHistory();
  const location = useLocation();

  const [visible, setVisible] = useState<boolean>(false);
  const [ingredient, setIngredient] = useState<IBurgerIngredient | null>();
  const [currentTab, setCurrentTab] = useState<string>("bun");

  const ingredients: IBurgerIngredient[] = useSelector(
    ({ burger }) => burger.ingredients
  );
  const loading: boolean = useSelector(({ burger }) => burger.loading);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const bunRef = useRef<HTMLDivElement>(null);
  const sauceRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const ingredientClickHandler = (ingredientId: string) => {
    const selectedIngredient = ingredients
      .filter((item) => item._id === ingredientId)
      .reduce<IBurgerIngredient>((acc, cur) => cur, {} as IBurgerIngredient);

    setVisible(true);
    setIngredient(selectedIngredient);

    history.push({
      pathname: `/ingredients/${selectedIngredient._id}`,
      state: { background: location },
    });
  };

  const tabClickHandler = (
    tab: string,
    tabRef: { current: HTMLDivElement | null }
  ) => {
    setCurrentTab(tab);
    tabRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    // Будем сравнивать расстояния от заголовков до верхней части скроллящегося контейнера
    const scrollContainerPosition =
      scrollContainerRef.current?.getBoundingClientRect().top || 0;
    const firstHeaderPosition =
      bunRef.current?.getBoundingClientRect().top || 0;
    const secondHeaderPosition =
      sauceRef.current?.getBoundingClientRect().top || 0;
    const thirdHeaderPosition =
      mainRef.current?.getBoundingClientRect().top || 0;

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

    history.push({
      pathname: "/",
    });
  };

  return (
    <>
      <section className={BurgerIngredientsStyles.burgerIngredients}>
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
              ingredientClickHandler={ingredientClickHandler}
              scrollContainerRef={scrollContainerRef}
              handleScroll={handleScroll}
            />
          </>
        )}
      </section>

      {visible && ingredient && (
        <Modal header="Детали ингредиента" onClose={onModalClose}>
          <IngredientDetails {...ingredient} />
        </Modal>
      )}
    </>
  );
};
