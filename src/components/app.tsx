import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCheckPreviousLogin } from "../services/hooks/check-previous-login";
import { getIngredients } from "../services/actions/burger";
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
