import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { decreaseCount, removeIngredient } from "../../services/actions/burger";
import IngredientStyles from "./burger-constructor-item.module.css";

export const BurgerConstructorItem = memo(function BurgerConstructorItem({
  findIngredient,
  moveIngredient,
  ...props
}) {
  const dispatch = useDispatch();

  const { selectedIngredients: ingredients } = useSelector(
    (store) => store.burger
  );

  const handleRemove = (id) => {
    const ingredient = ingredients
      .filter((item) => item._id === id)
      .reduce((acc, curr) => curr, {});

    dispatch(removeIngredient(ingredient));
    dispatch(decreaseCount(ingredient));
  };

  const uniqueID = props.uniqueID;
  const originalIndex = findIngredient ? findIngredient(uniqueID).index : null;

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
      hover({ uniqueID: draggedId }) {
        if (draggedId !== uniqueID) {
          const { index: overIndex } = findIngredient(uniqueID);
          moveIngredient(draggedId, overIndex);
        }
      },
    }),
    [findIngredient, moveIngredient]
  );

  const opacity = isDragging ? 0 : 1;

  const ingredientElStyle = `${IngredientStyles.ingredientEl} ml-2 mr-2`;

  return (
    <div
      className={IngredientStyles.ingredient}
      ref={(node) => dragRef(dropRef(node))}
      style={{ opacity }}
    >
      <span className={IngredientStyles.drag}>
        <DragIcon type="primary" />
      </span>
      <span className={ingredientElStyle}>
        <ConstructorElement
          {...props}
          handleClose={() => handleRemove(props._id)}
        />
      </span>
    </div>
  );
});

BurgerConstructorItem.propTypes = {
  type: PropTypes.oneOf(["top", "bottom"]),
  isLocked: PropTypes.bool,
  _id: PropTypes.string.isRequired,
  uniqueID: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
