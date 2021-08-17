import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { OrderStatusList } from "../../components/order-status-list/order-status-list";
import { FeedDetails } from "../../components/feed-details/feed-details";
import { CardList } from "../../components/card-list/card-list";
import { Modal } from "../../components/modal/modal";
import FeedsStyles from "./feeds.module.css";

export const Feeds = () => {
  const history = useHistory();
  const location = useLocation();

  const [visible, setVisible] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { ingredients } = useSelector((store) => store.burger);
  const orders = useSelector((store) => store.wsReducer.orders || []);
  const [ordersAll] = orders;

  useEffect(() => {
    if (history.action === "POP") {
      history.push(history.location.pathname);
    }
  }, [history]);

  if (!ordersAll) {
    return null;
  }

  const cardClickHandler = (order) => {
    setVisible(true);
    setOrderId(order.number);

    history.push({
      pathname: `/feed/${order.number}`,
      state: { feed: location },
    });
  };

  const onModalClose = () => {
    setVisible(false);
    history.push({
      pathname: "/feed",
    });
  };

  const sectionStyle = `${FeedsStyles.feedsWrapper} mt-10 mr-5`;

  return (
    <>
      <section className={sectionStyle}>
        <p className="text text_type_main-large mb-5">Лента заказов</p>

        <div className={FeedsStyles.feeds}>
          <CardList
            {...ordersAll}
            ingredients={ingredients}
            cardClickHandler={cardClickHandler}
          />
          <OrderStatusList {...ordersAll} />
        </div>
      </section>

      {visible && (
        <Modal header="Детали заказа" onClose={onModalClose}>
          <FeedDetails
            orderId={orderId}
            ingredients={ingredients}
            ordersAll={ordersAll}
          />
        </Modal>
      )}
    </>
  );
};
