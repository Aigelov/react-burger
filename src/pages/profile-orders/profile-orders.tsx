import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ProfileTabs } from "../../components/profile-tabs/profile-tabs";
import { FeedDetails } from "../../components/feed-details/feed-details";
import ProfileOrdersStyles from "./profile-orders.module.css";
import { CardList } from "../../components/card-list/card-list";
import { Modal } from "../../components/modal/modal";
import { useDispatch, useSelector } from "../../services/hooks";
import { IOrder } from "../../services/actions";
import { TWsUserState } from "../../services/reducers/ws-user-reducer";
import {
  WS_USER_CONNECTION_CLOSE,
  WS_USER_CONNECTION_START,
} from "../../services/action-types";

export const ProfileOrders = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const ingredients = useSelector(({ burger }) => burger.ingredients);
  const { userOrders } = useSelector<TWsUserState>(
    ({ wsUserReducer }) => wsUserReducer
  );
  const [ordersAll] = userOrders;

  useEffect(() => {
    if (history.action === "POP") {
      history.push(history.location.pathname);
    }
  }, [history]);

  useEffect(() => {
    dispatch({ type: WS_USER_CONNECTION_START });

    return () => {
      dispatch({ type: WS_USER_CONNECTION_CLOSE });
    };
  }, [dispatch]);

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
