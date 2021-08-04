import React from "react";
import { ProfileTabs } from "../../components/profile-tabs/profile-tabs";
import ProfileOrdersStyles from "./profile-orders.module.css";

export const ProfileOrders = () => {
  return (
    <div className={ProfileOrdersStyles.profileOrders}>
      <ProfileTabs />

      <div>PROFILE ORDERS</div>
    </div>
  );
};
