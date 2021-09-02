import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ProfileTabs } from "../../components/profile-tabs/profile-tabs";
import { FeedDetails } from "../../components/feed-details/feed-details";
import ProfileOrdersStyles from "./profile-orders.module.css";
import { CardList } from "../../components/card-list/card-list";
import { Modal } from "../../components/modal/modal";
import { useSelector } from "../../services/hooks";
import { IOrder } from "../../services/actions";

export const ProfileOrders = () => {
  const history = useHistory();
  const location = useLocation();

  const [visible, setVisible] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const { ingredients } = useSelector(({ burger }) => burger);
  const orders = useSelector(
    ({ wsUserReducer }) => (wsUserReducer as any).userOrders || []
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
      pathname: `/profile/orders/${order.number}`,
      state: { background: location },
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
