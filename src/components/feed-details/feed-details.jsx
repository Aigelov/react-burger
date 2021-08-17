import React, { Fragment } from "react";
import FeedDetailsStyles from "./feed-details.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const FeedDetails = ({ order }) => {
  return (
    <div className={FeedDetailsStyles.feedDetails}>
      <div
        className="text text_type_digits-default"
        style={{ textAlign: "center" }}
      >
        #034535
      </div>
      <div className="mb-10" />
      <div className="text text_type_main-medium">
        Black Hole Singularity острый бургер
      </div>
      <div className="mb-3" />
      <div className="text text_type_digits-small" style={{ color: "#00CCCC" }}>
        Выполнен
      </div>
      <div className="mb-15" />
      <div className="text text_type_main-medium">Состав:</div>
      <div className="mb-6" />
      <div className={FeedDetailsStyles.feedOrderList}>
        {order.map((item, index) => (
          <Fragment key={index}>
            <div className={FeedDetailsStyles.feedOrder}>
              <div>
                <img
                  src={`/ingredient-preview/${item.id}.png`}
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
          Вчера, 13:50 i-GMT+3
        </div>
        <div className={FeedDetailsStyles.price}>
          <div className="text text_type_digits-default mr-2">510</div>
          <div className={FeedDetailsStyles.currencyIcon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
