import React from "react";
import FeedCardStyles from "./feed-card.module.css";

const START_INDEX = 10;
const MORE_THAN = 4;

export const FeedCard = ({ ingredient, ingredientsCount, index }) => {
  if (index + 1 > MORE_THAN) {
    return null;
  }

  const showMore = ingredientsCount - MORE_THAN;

  return (
    <div
      className={FeedCardStyles.cardIngredient}
      style={{ zIndex: START_INDEX - index }}
    >
      {ingredientsCount > MORE_THAN && index + 1 === MORE_THAN && (
        <div className={FeedCardStyles.hasMore}>
          {showMore > 0 && (
            <div className="text text_type_digits-default">
              +{ingredientsCount - MORE_THAN}
            </div>
          )}
        </div>
      )}
      <img src={`/ingredient-preview/${ingredient}.png`} alt="Ingredient" />
    </div>
  );
};
