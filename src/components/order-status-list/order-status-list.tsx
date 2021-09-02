import React, { FC, Fragment } from "react";
import { PerformedOrders } from "../performed-orders/performed-orders";
import OrderStatusListStyles from "./order-status-list.module.css";
import { IOrder, IPendingOrder, IReadyOrder } from "../../services/actions";

const LIMIT_ORDERS = 10;

export interface IOrderStatusList {
  total: number;
  totalToday: number;
  orders: IOrder[];
  timestamp: number;
}

export const OrderStatusList: FC<IOrderStatusList> = ({
  total,
  totalToday,
  orders,
}) => {
  const readyOrders: IReadyOrder[] = orders
    .filter(
      (item, index: number) => item.status === "done" && index < LIMIT_ORDERS
    )
    .map((item) => ({
      _id: item._id,
      number: item.number,
    }));

  const pendingOrders: IPendingOrder[] = orders
    .filter(
      (item, index: number) => item.status === "pending" && index < LIMIT_ORDERS
    )
    .map((item) => ({
      _id: item._id,
      number: item.number,
    }));

  return (
    <div className={OrderStatusListStyles.ordersStatusList}>
      <div className={OrderStatusListStyles.ordersReadyAndInProgress}>
        <div className={OrderStatusListStyles.ordersReady}>
          <div className="text text_type_main-medium">Готовы:</div>
          <div className="mb-6" />
          {readyOrders.map((order) => (
            <Fragment key={order._id}>
              <div
                className="text text_type_digits-default"
                style={{ color: "#00CCCC" }}
              >
                {order.number}
              </div>
              <div className="mb-2" />
            </Fragment>
          ))}
        </div>
        <div>
          <div className="text text_type_main-medium">В работе:</div>
          <div className="mb-6" />
          {pendingOrders.map((order) => (
            <Fragment key={order._id}>
              <div className="text text_type_digits-default">
                {order.number}
              </div>
              <div className="mb-2" />
            </Fragment>
          ))}
        </div>
      </div>

      <div className="mb-15" />

      <PerformedOrders text="Выполнено за все время" amount={total} />

      <div className="mb-15" />

      <PerformedOrders text="Выполнено за сегодня" amount={totalToday} />
    </div>
  );
};
