import React from "react";
import { useParams } from "react-router-dom";
import { FeedDetails } from "../../components/feed-details/feed-details";
import FeedStyles from "./feed.module.css";
import { useSelector } from "../../services/hooks";

interface FeedParams {
  orderId: string;
}

export const Feed = () => {
  const { orderId } = useParams<FeedParams>();

  const { ingredients } = useSelector(({ burger }) => burger);
  const orders = useSelector(({ wsReducer }) => wsReducer.orders);

  if (!orders?.length) {
    return null;
  }

  const [ordersAll] = orders;

  if (!ordersAll) {
    return null;
  }

  return (
    <div className={FeedStyles.feed}>
      <FeedDetails
        orderId={orderId}
        ingredients={ingredients}
        ordersAll={ordersAll}
      />
    </div>
  );
};
