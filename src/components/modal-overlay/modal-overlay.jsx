import React from "react";
import PropTypes from "prop-types";
import ModalOverlayStyles from "./modal-overlay.module.css";

export const ModalOverlay = ({ children }) => {
  return <div className={ModalOverlayStyles.modalOverlay}>{children}</div>;
};

ModalOverlay.propTypes = {
  children: PropTypes.element,
};
