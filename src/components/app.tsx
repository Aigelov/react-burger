import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useCheckPreviousLogin, useDispatch } from "../services/hooks";
import { getIngredients } from "../services/actions";
import { Routes } from "../services/routes/routes";

export const App = () => {
  const dispatch = useDispatch();

  useCheckPreviousLogin();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <Router>
      <Routes />
    </Router>
  );
};
