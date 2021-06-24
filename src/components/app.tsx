import React, { useEffect, useState } from "react";
import { AppHeader } from "./app-header/app-header";
import { Spinner } from "./spinner/spinner";
import { Main } from "./main/main";

const INGREDIENTS_URL = "https://norma.nomoreparties.space/api/ingredients";

export const App = () => {
  const [ingredients, setIngredients] = useState<any>([]);
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
        const response = await res.json();
        setIngredients(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error("ERROR in [GetIngredients] method");
      }
    };

    getIngredients();
  }, []);

  return (
    <>
      <AppHeader />
      {loading && <Spinner />}
      {!loading && <Main ingredients={ingredients} />}
    </>
  );
};
