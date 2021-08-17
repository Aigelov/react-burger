import React, { Fragment } from "react";
import FeedDetailsStyles from "./feed-details.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { format } from "date-fns";

const statusTypes = {
  done: "Выполнен",
  pending: "Готовится",
  created: "Создан",
};

export const FeedDetails = ({ orderId, ingredients, ordersAll }) => {
  const { orders } = ordersAll;
  const currentOrder = orders.filter(
    (item) => Number(item.number) === Number(orderId)
  );
  const [order] = currentOrder;

  const amountCount = order.ingredients.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur] += 1;
    }
    return acc;
  }, {});

  const orderIngredients = ingredients
    .filter((item) => {
      return order.ingredients.includes(item._id);
    })
    .map((item) => {
      item.amount = amountCount[item._id];

      return item;
    });

  const totalPrice = ingredients
    .filter((item) => order.ingredients.includes(item._id))
    .reduce((total, cur) => total + cur.price, 0);

  return (
    <div className={FeedDetailsStyles.feedDetails}>
      <div
        className="text text_type_digits-default"
        style={{ textAlign: "center" }}
      >
        #{orderId}
      </div>
      <div className="mb-10" />
      <div className="text text_type_main-medium">{order.name}</div>
      <div className="mb-3" />
      <div className="text text_type_digits-small" style={{ color: "#00CCCC" }}>
        {statusTypes[order.status]}
      </div>
      <div className="mb-15" />
      <div className="text text_type_main-medium">Состав:</div>
      <div className="mb-6" />
      <div className={FeedDetailsStyles.feedOrderList}>
        {orderIngredients.map((item, index) => (
          <Fragment key={index}>
            <div className={FeedDetailsStyles.feedOrder}>
              <div>
                <img
                  src={`/ingredient-preview/${item._id}.png`}
                  alt="Ingredient"
                />
              </div>
              <div className="mr-4" />
              <div
                className="text text_type_main-default"
                style={{ maxWidth: 350 }}
              >
                {item.name}
              </div>
              <div className="mr-4" />
              <div className={FeedDetailsStyles.price}>
                <div className="text text_type_digits-default mr-2">
                  {item.amount} x {item.price}
                </div>
                <div className={FeedDetailsStyles.currencyIcon}>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </div>
            <div className="mb-4" />
          </Fragment>
        ))}
      </div>
      <div className="mb-10" />
      <div className={FeedDetailsStyles.bottom}>
        <div className="text text_type_main-default text_color_inactive">
          {format(new Date(order.createdAt), "dd.MM.yyyy HH:mm:ss")}
        </div>
        <div className={FeedDetailsStyles.price}>
          <div className="text text_type_digits-default mr-2">{totalPrice}</div>
          <div className={FeedDetailsStyles.currencyIcon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
