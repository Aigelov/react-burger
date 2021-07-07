import React, { useEffect, useState } from "react";
import { AppHeader } from "./app-header/app-header";
import { Spinner } from "./spinner/spinner";
import { Main } from "./main/main";
import { BurgerContext } from "./services/BurgerContext";

const INGREDIENTS_URL = "https://norma.nomoreparties.space/api/ingredients";

export const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        setLoading(true);
        const res = await fetch(INGREDIENTS_URL, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("ERROR network answer was not ok");
        }

        const response = await res.json();
        setIngredients(response.data);
      } catch (err) {
        console.error("ERROR in [GetIngredients] method", err);
      } finally {
        setLoading(false);
      }
    };

    getIngredients();
  }, []);

  return (
    <>
      <AppHeader />
      {loading && <Spinner />}
      {!loading && ingredients.length && (
        <BurgerContext.Provider value={{ ingredients, selectedIngredients }}>
          <Main setSelectedIngredients={setSelectedIngredients} />
        </BurgerContext.Provider>
      )}
    </>
  );
};
