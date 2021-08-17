import React from "react";
import { numberWithSpaces } from "../../utils/number-with-spaces";
import PerformedOrdersStyles from "./performed-orders.module.css";

export const PerformedOrders = ({ text, amount }) => {
  return (
    <div>
      <div className="text text_type_main-medium">{text}:</div>
      <div className="text text_type_digits-large">
        <span className={PerformedOrdersStyles.textShadow}>
          {numberWithSpaces(amount)}
        </span>
      </div>
    </div>
  );
};
