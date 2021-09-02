import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { OrderStatusList } from "../../components/order-status-list/order-status-list";
import { FeedDetails } from "../../components/feed-details/feed-details";
import { CardList } from "../../components/card-list/card-list";
import { Modal } from "../../components/modal/modal";
import FeedsStyles from "./feeds.module.css";
import { useSelector } from "../../services/hooks";
import { IOrder } from "../../services/actions";

export const Feeds = () => {
  const history = useHistory();
  const location = useLocation();

  const [visible, setVisible] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const { ingredients } = useSelector(({ burger }) => burger);
  const orders = useSelector(
    ({ wsReducer }) => (wsReducer as any).orders || []
  );
  const [ordersAll] = orders;

  useEffect(() => {
    if (history.action === "POP") {
      history.push(history.location.pathname);
    }
  }, [history]);

  if (!ordersAll) {
    return null;
  }

  const cardClickHandler = (order: IOrder) => {
    setVisible(true);
    setOrderId(String(order.number));

    history.push({
      pathname: `/feed/${order.number}`,
      state: { background: location },
    });
  };

  const onModalClose = () => {
    setVisible(false);
    history.push({
      pathname: "/feed",
    });
  };

  return (
    <>
      <section className={FeedsStyles.feedsWrapper}>
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
