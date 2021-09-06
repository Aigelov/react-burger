import React from "react";
import { Link, useLocation } from "react-router-dom";
import NoMatchStyles from "./no-match.module.css";

export const NoMatch = () => {
  const location = useLocation();

  return (
    <div className={NoMatchStyles.noMatch}>
      <span className={NoMatchStyles.notFound}>404</span>
      <span className={NoMatchStyles.path}>
        Page not found for {location.pathname}
      </span>
      <Link to="/" className={NoMatchStyles.path}>
        Go to main page
      </Link>
    </div>
  );
};
