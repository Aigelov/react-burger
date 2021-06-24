import ModalOverlayStyles from "./modal-overlay.module.css";

export const ModalOverlay = ({ children }) => {
  return <div className={ModalOverlayStyles.modalOverlay}>{children}</div>;
};
