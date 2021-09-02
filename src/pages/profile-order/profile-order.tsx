import React from "react";
import { useParams } from "react-router-dom";
import { FeedDetails } from "../../components/feed-details/feed-details";
import ProfileOrderStyles from "./profile-order.module.css";
import { useSelector } from "../../services/hooks";

interface IProfileOrderParams {
  orderId: string;
}

export const ProfileOrder = () => {
  const { orderId } = useParams<IProfileOrderParams>();

  const { ingredients } = useSelector(({ burger }) => burger);
  const orders = useSelector(
    ({ wsReducer }) => (wsReducer as any).orders || []
  );
  const [ordersAll] = orders;

  if (!ordersAll) {
    return null;
  }

  return (
    <div className={ProfileOrderStyles.order}>
      <FeedDetails
        orderId={orderId}
        ingredients={ingredients}
        ordersAll={ordersAll}
      />
    </div>
  );
};
