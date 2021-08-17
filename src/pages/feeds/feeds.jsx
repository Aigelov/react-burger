import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { OrderStatusList } from "../../components/order-status-list/order-status-list";
import { FeedDetails } from "../../components/feed-details/feed-details";
import { CardList } from "../../components/card-list/card-list";
import { Modal } from "../../components/modal/modal";
import FeedsStyles from "./feeds.module.css";
import { feedOrder } from "../feed/feed";

export const Feeds = () => {
  const history = useHistory();
  const location = useLocation();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (history.action === "POP") {
      history.push(history.location.pathname);
    }
  }, [history]);

  const cardClickHandler = (order) => {
    setVisible(true);

    history.push({
      pathname: `/feed/${order.orderNumber}`,
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
          <CardList cardClickHandler={cardClickHandler} />
          <OrderStatusList />
        </div>
      </section>

      {visible && (
        <Modal header="Детали заказа" onClose={onModalClose}>
          <FeedDetails order={feedOrder} />
        </Modal>
      )}
    </>
  );
};
