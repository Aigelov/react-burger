import React from "react";
// import { useParams } from "react-router-dom";
import { FeedDetails } from "../../components/feed-details/feed-details";
import ProfileOrderStyles from "./profile-order.module.css";
import { feedOrder } from "../feed/feed";

export const ProfileOrder = () => {
  // const { orderId } = useParams();

  return (
    <div className={ProfileOrderStyles.order}>
      <FeedDetails order={feedOrder} />
    </div>
  );
};
