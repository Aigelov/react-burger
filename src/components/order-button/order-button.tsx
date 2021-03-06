import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "../order-details/order-details";
import { checkoutOrder, wsSendMessage } from "../../services/actions";
import { Spinner } from "../spinner/spinner";
import { Modal } from "../modal/modal";
import { useDispatch, useSelector } from "../../services/hooks";
import { IBurgerIngredient } from "../../services/models";

export const OrderButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [visible, setVisible] = useState<boolean>(false);

  const ingredients: IBurgerIngredient[] = useSelector(
    ({ burger }) => burger.selectedIngredients
  );
  const { isAuthorized } = useSelector(({ auth }) => auth);
  const { loading, order } = useSelector(({ orderReducer }) => orderReducer);

  const ingredientIDs = ingredients.map((item) => item._id);

  useEffect(() => {
    if (!loading && order && ingredientIDs.length) {
      dispatch(
        wsSendMessage({
          name: order.name,
          orderNumber: order.number,
          ingredientIDs,
        })
      );
    }
  }, [dispatch, loading, order, ingredientIDs]);

  const onModalClose = () => {
    setVisible(false);
  };

  const checkoutHandler = async () => {
    if (!isAuthorized) {
      history.push("/login");
    }

    const bun = ingredients.filter((item) => item.type === "bun");

    // Запрос к серверу за номером заказа нельзя отправить пока не добавлена булка.
    if (!bun.length) {
      return null;
    }

    dispatch(checkoutOrder(ingredientIDs));

    setVisible(true);
  };

  return (
    <>
      {loading && (
        <div>
          <Spinner />
        </div>
      )}

      {!loading && (
        <Button type="primary" size="large" onClick={checkoutHandler}>
          Оформить заказ
        </Button>
      )}

      {visible && !loading && order && (
        <Modal onClose={onModalClose}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};
