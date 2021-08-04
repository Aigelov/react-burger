import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useCheckPreviousLogin } from "../services/hooks/check-previous-login";
import { useUpdateToken } from "../services/hooks/update-token";
import { Routes } from "../services/routes/routes";

export const App = () => {
  useCheckPreviousLogin();
  useUpdateToken();

  return (
    <Router>
      <Routes />
    </Router>
  );
};
