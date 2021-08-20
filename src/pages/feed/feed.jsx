import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FeedDetails } from "../../components/feed-details/feed-details";
import FeedStyles from "./feed.module.css";

export const Feed = () => {
  const { orderId } = useParams();

  const { ingredients } = useSelector((store) => store.burger);
  const orders = useSelector((store) => store.wsReducer.orders || []);
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
