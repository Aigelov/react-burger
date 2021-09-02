import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useCheckPreviousLogin, useDispatch } from "../services/hooks";
import {
  WS_CONNECTION_START,
  WS_USER_CONNECTION_START,
} from "../services/action-types";
import { getIngredients } from "../services/actions";
import { Routes } from "../services/routes/routes";

export const App = () => {
  const dispatch = useDispatch();

  useCheckPreviousLogin();

  useEffect(() => {
    dispatch(getIngredients());
    dispatch({ type: WS_CONNECTION_START });
    dispatch({ type: WS_USER_CONNECTION_START });
  }, [dispatch]);

  return (
    <Router>
      <Routes />
    </Router>
  );
};
