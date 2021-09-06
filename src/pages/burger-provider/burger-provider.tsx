import React, { FC, useEffect } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useHistory } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { useAlert } from "react-alert";
import { addIngredient, increaseCount } from "../../services/actions";
import { BurgerIngredients } from "../../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../../components/burger-constructor/burger-constructor";
import { useDispatch, useSelector } from "../../services/hooks";
import { IBurgerIngredient, IBurgerIngredientID } from "../../services/models";

export const BurgerProviderPage: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { ingredients, selectedIngredients } = useSelector(
    ({ burger }) => burger
  );

  const alert = useAlert();

  useEffect(() => {
    if (history.action === "POP") {
      history.push(history.location.pathname);
    }
  }, [history]);

  const handleDrop = (draggedItem: IBurgerIngredientID) => {
    const ingredient = ingredients
      .filter((item: IBurgerIngredient) => item._id === draggedItem.id)
      .reduce<IBurgerIngredient>((acc, curr) => curr, {} as IBurgerIngredient);

    if (!selectedIngredients.length && ingredient.type !== "bun") {
      alert.show("Сначала надо выбрать булку");
      return false;
    }

    dispatch(addIngredient(ingredient));
    dispatch(increaseCount(ingredient));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <BurgerIngredients />
      <BurgerConstructor onDropHandler={handleDrop} />
    </DndProvider>
  );
};
