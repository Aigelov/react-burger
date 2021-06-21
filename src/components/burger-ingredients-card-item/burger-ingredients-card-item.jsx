import React from "react";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import CardItemStyles from "./burger-ingredients-card-item.module.css";

export const BurgerIngredientsCardItem = ({
  name,
  counter,
  price,
  image,
  ...others
}) => {
  const cardStyle = `${CardItemStyles.card} mb-8`;
  const currencyIconStyle = `${CardItemStyles.currencyIcon} ml-2`;

  return (
    <article className={cardStyle}>
      <span className="ml-3 mr-3">
        {counter > 0 && <Counter count={counter} size="default" />}
        <img src={image} alt={name} width="100%" />
        <div className="pt-1 pb-1">
          <span className="text text_type_main-medium">{price}</span>
          <span className={currencyIconStyle}>
            <CurrencyIcon type="primary" />
          </span>
        </div>
        <span>{name}</span>
      </span>
    </article>
  );
};

BurgerIngredientsCardItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  counter: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
};
