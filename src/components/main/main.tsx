import React, { FC } from "react";
import MainStyles from "./main.module.css";

export const Main: FC = ({ children }) => {
  const mainStyle = `${MainStyles.main} col-9`;

  return <main className={mainStyle}>{children}</main>;
};
