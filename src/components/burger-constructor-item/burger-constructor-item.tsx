import React, { FC, memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { decreaseCount, removeIngredient } from "../../services/actions";
import IngredientStyles from "./burger-constructor-item.module.css";
import { useDispatch, useSelector } from "../../services/hooks";
import {
  IBurgerIngredient,
  IBurgerIngredientUniqueID,
  IConstructedBurger,
  TFindIngredient,
  TMoveIngredient,
} from "../../services/models";

interface IBurgerConstructorItem {
  findIngredient: TFindIngredient;
  moveIngredient: TMoveIngredient;
  ingredient: IConstructedBurger;
}

export const BurgerConstructorItem: FC<IBurgerConstructorItem> = memo(
  ({ findIngredient, moveIngredient, ingredient }) => {
    const dispatch = useDispatch();

    const { selectedIngredients: ingredients } = useSelector(
      ({ burger }) => burger
    );

    const handleRemove = (id: string) => {
      const ingredient = ingredients
        .filter((item: IBurgerIngredient) => item._id === id)
        .reduce<IBurgerIngredient>((acc, curr) => {
          return curr;
        }, {} as IBurgerIngredient);

      dispatch(removeIngredient(ingredient));
      dispatch(decreaseCount(ingredient));
    };

    const uniqueID = ingredient.uniqueID;
    const originalIndex = findIngredient
      ? findIngredient(uniqueID).index
      : null;

    const [{ isDragging }, dragRef] = useDrag(
      () => ({
        type: "burger",
        item: { uniqueID, originalIndex },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
          const { uniqueID: droppedId, originalIndex } = item;
          const didDrop = monitor.didDrop();

          if (!didDrop) {
            moveIngredient(droppedId, originalIndex);
          }
        },
      }),
      [uniqueID, originalIndex, moveIngredient]
    );

    const [, dropRef] = useDrop(
      () => ({
        accept: "burger",
        canDrop: () => false,
        hover({ uniqueID: draggedId }: IBurgerIngredientUniqueID) {
          if (draggedId !== uniqueID) {
            const { index: overIndex } = findIngredient(uniqueID);
            moveIngredient(draggedId, overIndex);
          }
        },
      }),
      [findIngredient, moveIngredient]
    );

    const opacity = isDragging ? 0 : 1;

    return (
      <div
        className={IngredientStyles.ingredient}
        ref={(node) => dragRef(dropRef(node))}
        style={{ opacity }}
      >
        <div className={IngredientStyles.drag}>
          <DragIcon type="primary" />
        </div>
        <div className={IngredientStyles.ingredientEl}>
          <ConstructorElement
            {...ingredient}
            handleClose={() => handleRemove(ingredient._id)}
          />
        </div>
      </div>
    );
  }
);
