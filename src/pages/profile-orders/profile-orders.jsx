import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProfileTabs } from "../../components/profile-tabs/profile-tabs";
import { FeedDetails } from "../../components/feed-details/feed-details";
import ProfileOrdersStyles from "./profile-orders.module.css";
import { CardList } from "../../components/card-list/card-list";
import { Modal } from "../../components/modal/modal";

export const ProfileOrders = () => {
  const history = useHistory();
  const location = useLocation();

  const [visible, setVisible] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { ingredients } = useSelector((store) => store.burger);
  const orders = useSelector((store) => store.wsUserReducer.userOrders || []);
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
      pathname: `/profile/orders/${order.number}`,
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

        <CardList
          {...ordersAll}
          ingredients={ingredients}
          cardClickHandler={cardClickHandler}
        />
      </div>

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
