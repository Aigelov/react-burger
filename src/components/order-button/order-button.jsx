import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "../order-details/order-details";
import { setOrderNumber } from "../../services/actions/burger";
import { Modal } from "../modal/modal";

const CHECKOUT_URL = "https://norma.nomoreparties.space/api/orders";

export const OrderButton = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const { selectedIngredients: ingredients } = useSelector(
    (store) => store.burger
  );

  const onModalClose = () => {
    setVisible(false);
  };

  const ingredientIDs = ingredients.map((item) => item._id);

  const checkoutHandler = async () => {
    try {
      const bun = ingredients.filter((item) => item.type === "bun");

      // Запрос к серверу за номером заказа нельзя отправить пока не добавлена булка.
      if (!bun.length) {
        return null;
      }

      const body = JSON.stringify({
        ingredients: ingredientIDs,
      });
      const res = await fetch(CHECKOUT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      if (!res.ok) {
        throw new Error("ERROR network answer was not ok");
      }

      const response = await res.json();
      dispatch(setOrderNumber(response?.order?.number));

      setVisible(true);
    } catch (err) {
      console.error("[ERROR] in CheckoutHandler method", err);
    }
  };

  return (
    <>
      <Button type="primary" size="large" onClick={checkoutHandler}>
        Оформить заказ
      </Button>

      {visible && (
        <Modal onClose={onModalClose}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};
