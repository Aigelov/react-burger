import React, { useEffect } from "react";
import { clearBurgerConstructor } from "../../services/actions";
import OrderAcceptedStyles from "./order-details.module.css";
import Done from "../../images/done.svg";
import { useDispatch, useSelector } from "../../services/hooks";

export const OrderDetails = () => {
  const dispatch = useDispatch();
  const { order } = useSelector(({ orderReducer }) => orderReducer);

  useEffect(() => {
    return () => {
      dispatch(clearBurgerConstructor());
    };
  }, [dispatch]);

  const orderIdStyle = `${OrderAcceptedStyles.orderId} text text_type_digits-large`;
  const textGreyStyle = `${OrderAcceptedStyles.textGrey} text text_type_main-default mt-2`;

  return (
    <div className={OrderAcceptedStyles.orderAccepted}>
      <span className={orderIdStyle}>{order?.number}</span>
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
