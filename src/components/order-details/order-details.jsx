import React, { useContext } from "react";
import OrderAcceptedStyles from "./order-details.module.css";
import { OrderContext } from "../services/OrderContext";
import Done from "../../images/done.svg";

export const OrderDetails = () => {
  const { orderNumber } = useContext(OrderContext);

  const orderIdStyle = `${OrderAcceptedStyles.orderId} text text_type_digits-large`;
  const textGreyStyle = `${OrderAcceptedStyles.textGrey} text text_type_main-default mt-2`;

  return (
    <div className={OrderAcceptedStyles.orderAccepted}>
      <span className={orderIdStyle}>{orderNumber}</span>
      <span className="text text_type_main-medium mt-8">
        идентификатор заказа
      </span>
      <img src={Done} alt="Done" className="mt-15" />
      <span className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </span>
      <span className={textGreyStyle}>
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
};
