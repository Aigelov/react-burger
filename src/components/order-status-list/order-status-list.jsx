import React, { Fragment } from "react";
import { PerformedOrders } from "../performed-orders/performed-orders";
import OrderStatusListStyles from "./order-status-list.module.css";

const readyOrders = ["034533", "034532", "034531", "034530", "034529"];
const inProgressOrders = ["034538", "034541", "034542"];

export const OrderStatusList = () => {
  return (
    <div className={OrderStatusListStyles.ordersStatusList}>
      <div className={OrderStatusListStyles.ordersReadyAndInProgress}>
        <div className={OrderStatusListStyles.ordersReady}>
          <div className="text text_type_main-medium">Готовы:</div>
          <div className="mb-6" />
          {readyOrders.map((order) => (
            <Fragment key={order}>
              <div
                className="text text_type_digits-default"
                style={{ color: "#00CCCC" }}
              >
                {order}
              </div>
              <div className="mb-2" />
            </Fragment>
          ))}
        </div>
        <div>
          <div className="text text_type_main-medium">В работе:</div>
          <div className="mb-6" />
          {inProgressOrders.map((order) => (
            <Fragment key={order}>
              <div className="text text_type_digits-default">{order}</div>
              <div className="mb-2" />
            </Fragment>
          ))}
        </div>
      </div>

      <div className="mb-15" />

      <PerformedOrders text="Выполнено за все время" amount={28752} />

      <div className="mb-15" />

      <PerformedOrders text="Выполнено за сегодня" amount={138} />
    </div>
  );
};
