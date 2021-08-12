import React from "react";
import MainStyles from "./main.module.css";

export const Main = ({ children }) => {
  const mainStyle = `${MainStyles.main} col-9`;

  return <main className={mainStyle}>{children}</main>;
};
