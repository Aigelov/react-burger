import React from "react";
import { useParams } from "react-router-dom";

export const ProfileOrder = () => {
  const { orderId } = useParams();

  return <div>ProfileOrder</div>;
};
