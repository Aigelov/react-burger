import React, { FC } from "react";
import ModalOverlayStyles from "./modal-overlay.module.css";

export const ModalOverlay: FC = ({ children }) => {
  return <div className={ModalOverlayStyles.modalOverlay}>{children}</div>;
};
