import React from "react";
import PropTypes from "prop-types";
import { BurgerIngredientsCardItem } from "../burger-ingredients-card-item/burger-ingredients-card-item";
import CardStyles from "./burger-ingredients-card.module.css";

export const BurgerIngredientsCard = ({ title, data, tabRef }) => {
  return (
    <div ref={tabRef}>
      <p className="text text_type_main-medium mb-6">{title}</p>

      <span className={CardStyles.card}>
        {data.map((item) => (
          <BurgerIngredientsCardItem key={item._id} {...item} />
        ))}
      </span>
    </div>
  );
};

BurgerIngredientsCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
  tabRef: PropTypes.object,
};
