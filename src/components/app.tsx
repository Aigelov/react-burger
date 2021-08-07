import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getIngredients } from "../services/actions/burger";
import { Routes } from "../services/routes/routes";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <Router>
      <Routes />
    </Router>
  );
};
