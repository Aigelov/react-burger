import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ProfileTabs } from "../../components/profile-tabs/profile-tabs";
import { FeedDetails } from "../../components/feed-details/feed-details";
import ProfileOrdersStyles from "./profile-orders.module.css";
import { CardList } from "../../components/card-list/card-list";
import { Modal } from "../../components/modal/modal";
import { feedOrder } from "../feed/feed";

export const ProfileOrders = () => {
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
      pathname: `/profile/orders/${order.orderNumber}`,
      state: { profileFeed: location },
    });
  };

  const onModalClose = () => {
    setVisible(false);

    history.push({
      pathname: "/profile/orders",
    });
  };

  return (
    <>
      <div className={ProfileOrdersStyles.profileOrders}>
        <ProfileTabs />

        <CardList cardClickHandler={cardClickHandler} />
      </div>

      {visible && (
        <Modal header="Детали заказа" onClose={onModalClose}>
          <FeedDetails order={feedOrder} />
        </Modal>
      )}
    </>
  );
};
