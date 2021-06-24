import React, { useState } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "../order-details/order-details";
import { Modal } from "../modal/modal";

export const OrderButton = () => {
  const [visible, setVisible] = useState(false);

  const onModalClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" size="large" onClick={() => setVisible(true)}>
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
